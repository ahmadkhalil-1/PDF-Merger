import express from 'express';
import path from 'path';
import multer from 'multer';
import { mergePdfs } from './mergerPdf.js';

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use('/static', express.static('public'));
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(path.resolve(), 'templates/index.html'));
});

app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
    try {
        console.log(req.files);
        await mergePdfs(path.join(path.resolve(), req.files[0].path), path.join(path.resolve(), req.files[1].path));
        res.redirect(`http://localhost:3000/static/merger.pdf`);
    } catch (err) {
        next(err);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
