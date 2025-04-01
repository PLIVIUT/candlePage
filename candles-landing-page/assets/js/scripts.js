const candles = [
    {
        imgSrc: "candle1.jpeg",
        title: "Lavander Bliss",
        description: "A soothing lavender scent to calm your mind.",
        candleLink: "https://www.instagram.com/p/DHePvx_I9vK/",
    },
    {
        imgSrc: "candle2.jpeg",
        title: "Vanilla Dream",
        description: "Indulge in the sweet aroma of vanilla.",
        candleLink: "https://www.instagram.com/p/DBo5RsUoDtI/",
    },
    {
        imgSrc: "candle3.jpeg",
        title: "Citrus Burst",
        description: "Brighten your space with a refreshing citrus scent.",
        candleLink: "https://www.instagram.com/p/DGyeB94o4_k/",
    },
    {
        imgSrc: "candle4.jpeg",
        title: "Glass of peace",
        description: "After a hard day, relax with a glass of peace.",
        candleLink: "https://www.instagram.com/p/DFKmyf_oDVy/",
    },
    {
        imgSrc: "candle5.jpeg",
        title: "Childhood smell",
        description: "Take a walk on childhood alley.",
        candleLink: "https://www.instagram.com/p/DGybprdo-po/",
    },
]

const section = document.querySelector("section");

candles.forEach((candle) => {
    const product = document.createElement("div");
    product.classList.add("product");
    const imgSrc = document.createElement("img");
    imgSrc.src = `assets/images/${candle.imgSrc}`;
    const title = document.createElement("h3");
    title.textContent = candle.title;
    const description = document.createElement("p");
    description.textContent = candle.description;
    const link = document.createElement("a");
    link.href = candle.candleLink;

    section.appendChild(product);
    product.appendChild(imgSrc);
    product.appendChild(link);
    link.appendChild(title);
    product.appendChild(description);
})
