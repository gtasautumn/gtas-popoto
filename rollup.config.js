import node from "rollup-plugin-node-resolve";
import copy from 'rollup-plugin-copy';

export default {
    input: "index",
    plugins: [
        node(),
        copy({
            "css/font": "dist/font",
            "css/font-icon-list.html": "dist/font-icon-list.html",
            verbose: true
        })
    ],
    external: ["d3", "jquery"],
    output: {
        extend: true,
        file: "dist/popoto_gtas.js",
        format: "umd",
        indent: false,
        name: "popoto_gtas",
        globals: {
            d3: "d3",
            jquery: "jQuery"
        }
    }
};