const ChartjsNode = require('chartjs-node');
var myChartOptions = {
    plugins: {
        afterDraw: function (chart, easing) {
            var self = chart.config;    /* Configuration object containing type, data, options */
            var ctx = chart.chart.ctx;  /* Canvas context used to draw with */
            
        }
    }
}
 
var chartJsOptions = {
    type: 'pie',
    //data: myChartData,
    options: myChartOptions
};

// 600x600 canvas size
var chartNode = new ChartjsNode(600, 600);
return chartNode.drawChart(chartJsOptions)
.then(() => {
    // chart is created
 
    // get image as png buffer
    return chartNode.getImageBuffer('image/png');
})
.then(buffer => {
    Array.isArray(buffer) // => true
    // as a stream
    return chartNode.getImageStream('image/png');
})
.then(streamResult => {
    // using the length property you can do things like
    // directly upload the image to s3 by using the
    // stream and length properties
    streamResult.stream // => Stream object
    streamResult.length // => Integer length of stream
    // write to a file
    return chartNode.writeImageToFile('image/png', './testimage.png');
})
.then(() => {
    // chart is now written to the file path
    // ./testimage.png
});