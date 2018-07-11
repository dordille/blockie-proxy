# blockie-proxy
Webservice to render ethereum blockies via lambda


### Usage with Lambda
```bash
# Build lambda package
make lambda
# Deploy to aws lambda via serverless
serverless deploy -v
```

### Usage with Docker
```
# Build docker contaienr
make docker
# Run with docker
docker run -p 1337:1337 blockie-proxy
```

### API
#### **GET** */{seed}?scale=\<int\>*
Returns a png representing the seed address. Default scale is 1.

### Styling `scale=1` blockies with [image-rendering](https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering) property
```html
<img class="blockie" 
     src="https://d3epvz0l6l8qu0.cloudfront.net/0x323936C736D67718902CE1f1623D48B29969f26c">
```
```css
.blockie {
  image-rendering: pixelated;
  width: 32px;
  height: 32px;
}
```

## Examples
![0x323936C736D67718902CE1f1623D48B29969f26c](https://d3epvz0l6l8qu0.cloudfront.net/0x323936C736D67718902CE1f1623D48B29969f26c?scale=8)
![0xFfE5180c9DFF4093baD8806146521A1390Cbb6C9](https://d3epvz0l6l8qu0.cloudfront.net/0xFfE5180c9DFF4093baD8806146521A1390Cbb6C9?scale=8)
![0x2071C59CE5310CefB6A21170e48f1dB025a9d5Da](https://d3epvz0l6l8qu0.cloudfront.net/0x2071C59CE5310CefB6A21170e48f1dB025a9d5Da?scale=8)
![0x506a77f9Ca38BDAA8D3FD3308F84241566515602](https://d3epvz0l6l8qu0.cloudfront.net/0x506a77f9Ca38BDAA8D3FD3308F84241566515602?scale=8)
![0xae363E967fF7E570656252363BAABDBB185B1f31](https://d3epvz0l6l8qu0.cloudfront.net/0xae363E967fF7E570656252363BAABDBB185B1f31?scale=8)
![0x83053a0bF741d9FDE9ac7915C5eE337721368a75](https://d3epvz0l6l8qu0.cloudfront.net/0x83053a0bF741d9FDE9ac7915C5eE337721368a75?scale=8)
![0x7062D98C5154F1FD0f667aa92e8dF6698B66478a](https://d3epvz0l6l8qu0.cloudfront.net/0x7062D98C5154F1FD0f667aa92e8dF6698B66478a?scale=8)
![0xa1fddfcAB340201e25cd5517508BDC2946aDc97c](https://d3epvz0l6l8qu0.cloudfront.net/0xa1fddfcAB340201e25cd5517508BDC2946aDc97c?scale=8)
![0xC25F5a7eeb0eCB4e7C57eA08Be2F199686c02874](https://d3epvz0l6l8qu0.cloudfront.net/0xC25F5a7eeb0eCB4e7C57eA08Be2F199686c02874?scale=8)
![0x23907Ac5740Ba5eF511cB8F35908d2548EAc3e63](https://d3epvz0l6l8qu0.cloudfront.net/0x23907Ac5740Ba5eF511cB8F35908d2548EAc3e63?scale=8)
![0x83053a0b1741d9cDE9ac791cC5eE537721364a75](https://d3epvz0l6l8qu0.cloudfront.net/0x83053a0b1741d9cDE9ac791cC5eE537721364a75?scale=8)
![0x23053c0b1741d1cDEaac791cC5eE537721364a75](https://d3epvz0l6l8qu0.cloudfront.net/0x23053c0b1741d1cDEaac791cC5eE537721364a75?scale=8)
![0x0000000000000000000000000000000000000000](https://d3epvz0l6l8qu0.cloudfront.net/0x0000000000000000000000000000000000000000?scale=8)
