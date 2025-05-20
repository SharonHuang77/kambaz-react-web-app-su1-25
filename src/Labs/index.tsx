import { Routes, Route, Navigate } from 'react-router-dom';
import Lab1 from './Lab1';
import Lab2 from './Lab2';
import Lab3 from './Lab3';
import TOC from './TOC';

export default function Labs() {
    return (
        <div id="wd-labs">
            <h1>Shiting Huang</h1>
            <p>NUID: 002087989</p>
            <p>Course: Web Development</p>
            <p>Summer 2025</p>
            <p>Section: 04</p>
            <h1>Labs</h1>
            <TOC />
            <Routes>
                <Route path="/" element={<Navigate to="Lab2" />} />
                <Route path="/Lab1" element={<Lab1 />} />
                <Route path="/Lab2" element={<Lab2 />} />
                <Route path="/Lab3" element={<Lab3 />} />
            </Routes>
        </div>
    );
}
