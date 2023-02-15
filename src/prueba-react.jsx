export const title = "Welcome to my page";
export const layout = "layout.njk";

export default (data) => (
    <>
        <h1>{data.title}</h1>
        <p>This is my first post using lume. I hope you like it!</p>
    </>
);