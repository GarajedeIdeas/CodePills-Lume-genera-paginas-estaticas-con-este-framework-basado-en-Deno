import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import jsx from "lume/plugins/jsx.ts";

const site = lume({
    src: "./src",
    dest: "./output",
    server: {
        port: 8000
    },
    watcher: {
        debounce: 10
    }
});

site.use(date());
site.use(jsx());

export default site;
