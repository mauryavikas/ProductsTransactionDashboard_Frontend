const devUrl="http://localhost:3004";
const proUrl="";

const baseUrl=devUrl;

// product services api
export const productServices={
    productList:`${baseUrl}/api/product/searchTransaction`,
    monthlystatistics:`${baseUrl}/api/product/statisticsMonthly`,
    monthlyBarChart:`${baseUrl}/api/product/barChartMonthly`,
    monthlyPieChart:`${baseUrl}/api/product/pieChartMonthly`,
}
