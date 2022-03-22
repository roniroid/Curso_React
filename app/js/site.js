//https://www.youtube.com/watch?v=T_j60n1zgu0 
document.addEventListener("DOMContentLoaded", function(event) {
    //Para probar → se agrega type="text/babel" a la etiqueta <script> de site.js
    //Usando JSX
    const $app = document.getElementById("app");
    const Avatar = params => {
        const src = `https://randomuser.me/api/portraits/women/${params.id}.jpg`;
        return (
            <picture>
                <img src={src} />
                {params.name}
            </picture>
        );
    };

    ReactDOM.render(
        <div>
            <Avatar id={10} name="Estela" />
            <Avatar id={11} name="Roberta" />
        </div>,
        $app
    );
    

    //Hasta 45:00
    /*const h = React.createElement;
    const $app = document.getElementById("app");
    const Avatar = params => {
        const src = `https://randomuser.me/api/portraits/women/${params.id}.jpg`;
        return h("img", {src});
    };

    //ReactDOM.render(h(Avatar, { id: 5 }), $app);

    //Para renderizar varios
    ReactDOM.render(
        h("div", null, [h(Avatar, { id: 5 }), h(Avatar, { id: 6 })]), 
        $app);*/

    /*
    Hasta 35:04
    const $app = document.getElementById("app");
    const Avatar = params => {
        const src = `https://randomuser.me/api/portraits/women/${params.id}.jpg`;
        return `
            <picture>
                <img src="${src}" />
                <em>${params.name}</em>
            </picture>`
        ;
    };
    $app.innerHTML += Avatar({ id: 5, name: "Sofía" });
    $app.innerHTML += Avatar({ id: 6, name: "Andrea" });

    $app.querySelectorAll("img").forEach(img => {
        img.addEventListener("click", () => {
            img.classList.toggle("disabled");
        });
    });
    */
});