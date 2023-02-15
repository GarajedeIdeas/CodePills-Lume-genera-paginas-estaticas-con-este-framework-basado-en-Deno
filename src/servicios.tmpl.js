export const title = 'Servicios de la empresa'
export const layout = 'layout.njk';
export const servicios = [
    {
        titulo: 'Desarrollo de aplicaciones web',
        descripcion: 'Nuestros más de 10 años de experiencia nos permiten desarrollar páginas de alta calidad'
    }, {
        titulo: 'Posicionamiento web',
        descripcion: 'Conseguimos que tu negocio se sitúe en los puestos más altos de Google'
    }
];

export default function () {
    return `<section>
            <h2>Servicios ofrecidos por la empresa</h2>
            ${servicios.map(servicio => `
                <div>
                    <h3>${servicio.titulo}</h3>
                    <p>${servicio.descripcion}</p>
                </div>
            `).join('')}
        </section>`;
}