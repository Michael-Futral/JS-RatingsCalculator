const { replaceWith } = require("cheerio/lib/api/manipulation");
const { default: options } = require("cheerio/lib/options");

collect_ratings(); {

    const ratings = {
        count: 0,
        sum: 0,
        average: 0
    };

    let rating = 0;
    const elements = document.querySelectorAll('.rating');
    elements.forEach((element) => {
        rating = parseInt(element.id.replace('star', ''));
        ratings.count += parseInt(element.value);
        ratings.sum += rating * parseInt(element.value);
    });

    if (ratings.count !== 0) {
        ratings.average = ratings.sum / ratings.count;
    }

    return ratings;
};

const itemCost = item.reduce(items, options);




