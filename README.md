# react-setup-tutorial (August, 2018)
Setting up React with Webpack and Babel.  Tutorial from https://www.valentinog.com/blog/react-webpack-babel/ 

It's hard to find good, current tutorials.  Valentino Galiardi has done us all a solid with this build process.  Please visit <a href="https://www.valentinog.com/blog/">his site</a> and check out the rest of what he has to offer! 

The relevant steps:
<ol>
	<li><code>mkdir</code> your working folder</li>
	<li><code>mkdir src</code> to hold the code</li>
	<li><code>npm init (-y)</code> to initialize the project</li>
	<li><code>npm i webpack -D</code> installs webpack</li>
	<li><code>npm i webpack-cli -D</code></li>
	<li>Add this to package.json

```
"scripts" : {
	"build" : "webpack --mode production"
}
```

   </li>
	<li>Install Babel:<br/><code>npm i babel-loader babel-core babel-preset-env babel-preset-react -D</code> </li>
	<li>Configure Babel by adding .babelrc and then add:

```
{
	"presets": ["env", "react"]
}
```

<li>Then create a minimal Webpack configuration in <code>webpack.config.js</code> to run all JS through Babel:
		
```
module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}	
			}
		]
	}
};
```

</li>
	<li>Pull in React: <code>npm i react react-dom -D</code></li>
	<li>Create some more folders to hold containers and presentation logic: <code>mkdir -p src/js/components/{container,presentational}</code>
	<p>Create <code>./src/index.js</code> and <code>./src/index.html</code> and that's all you need to start creating React containers and JSX, but just to gild the lily:</p>
	</li>
	<li>Add components for processing HTML: <code>npm i html-webpack-plugin html-loader -D</code></li>

<li>Add a few more lines so <code>webpack.config.js</code> looks like this:

```
/* DON'T FORGET THIS CONST UP HERE! :-) */
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
```

</li>

<li>Create some HTML and hook it into the container.  At this point <code>npm run build</code> should work, pushing the transpiled html into the .dist folder.</li>

<li>Last step, get it working with the webpack dev server: <code>npm i webpack-dev-server -D</code></li>

<li>And last tweak to <code>package.json</code>

```
"scripts": {
  "start": "webpack-dev-server --open --mode development",
  "build": "webpack"
}
```

Now <code>npm start</code> will launch the code in a browser and start listening for any changes.
</li>
</ol>

The tutorial is more complete in steps and installs more libraries like <code>prop-types</code>.  Check the <code>package.json</code> file and/or the <a href="https://www.valentinog.com/blog/react-webpack-babel/">original tutorial</a> for details.

