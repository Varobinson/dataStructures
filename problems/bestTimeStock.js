var maxProfit = function(prices) {
    let min = prices[0], max = 0;
    for(price of prices){
        if(price < min) min = price;
        else if(price - min > max) max = price - min;
    }return max;
};