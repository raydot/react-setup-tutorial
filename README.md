# react-setup-tutorial
Setting up React with Webpack and Babel.  Tutorial from https://www.valentinog.com/blog/react-webpack-babel/ 

The relevant steps:
<ol>
	<li><code>mkdir</code> your working folder</li>
	<li><code>mkdir src</code> to hold the code</li>
	<li><code>npm init (-y)</code> to initialize the project</li>
	<li><code>npm i webpack -D</code> installs webpack</li>
	<li><code>npm i webpack-cli -D</code></li>
	<li>Add this to package.json
		<p><code>"scripts" : {<br>
		&emsp;"build" : "webpack --mode production"<br>
		}
		</code></p>
	</li>
	<li><code>npm i babel-loader babel-core babel-preset-env babel-preset--react -D</code> to install Babel</li>
	<li>Configure Babel by adding .babelrc and then: <p><code>{<br>
	&emsp;"presets": ["env", "react"]<br>
	}
	</code></p></li>
	<li>Then create a minimal Webpack configuration to run all JS through Babel:
		<p><code>
			module.exports = {<br>
			&emsp;module: {<br>
			&emsp;&emsp;rules: [<br>
			&emsp;&emsp;&emsp;{<br>
			&emsp;&emsp;&emsp;&emsp;test: /\.js$/,<br>
			&emsp;&emsp;&emsp;&emsp;exclude: /node_modules/,<br>
			&emsp;&emsp;&emsp;&emsp;use: {<br>
			&emsp;&emsp;&emsp;&emsp;&emsp;loader: "babel-loader"<br>
			&emsp;&emsp;&emsp;&emsp;}<br>
			&emsp;&emsp;&emsp;}<br>
			&emsp;&emsp;]<br>
			&emsp;}<br>
			};
		</code></p>
	</li>
	<li>Then, pull in React: <code>npm i react react-dom -D</li>
	}
</ol>

