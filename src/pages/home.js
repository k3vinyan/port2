import React from 'react';

import HomepageStyle from '../styles/homepage.module.scss';
import HomeStyle from '../styles/home.module.scss';
import Navlist from '../components/navlist';

const Home = () => {

    return (
		<div classNname={HomepageStyle.cont}>

		</div>






        // <div className={HomepageStyle.container} id="home">
		// 	<Navlist />
		// 	<p>Hello, my name is Kevin Yan and I like to code and design simple things</p>		
        //     <div className={HomepageStyle.svgContainer}>
		// 		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		// 			width="339.103px" height="513.462px" viewBox="0 0 339.103 513.462" enable-background="new 0 0 339.103 513.462"
		// 			xmlSpace="preserve">
		// 			<path fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M138.434,262.17c-0.06,0.01-0.1,0.01-0.1,0.01"/>
		// 			<path stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M251.028,318.744"/>
		// 			<path fill="#FFFDFD" d="M163.958,225.535"/>
		// 			<path stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M274.83,302.304c-1.032,13.232-9.804,22.901-13.932,34.606
		// 				l-3.045-0.02l-6.243-0.489l-6.389-14.616c-13.684,2.249-52.806,8.469-86.449,11.939c-24.984,2.585-46.935,3.653-53.199,0.468
		// 				l24.778-40.713c6.017-13.231,12.208-26.046,10.145-28.286c-1.878-2.045-5.738-1.862-6.429-1.812c0.661-0.102,4.282-0.814,6.78-4.509
		// 				c2.745-4.071,6.471-12.651,6.471-12.651l1.435-10.077l6.192-1.699l2.755,4.448l13.756,10.035c0,0,21.021-28.051,25.129-29.741
		// 				c4.117-1.7,26.471-24.479,28.885-24.967c2.405-0.479,31.301,21.568,31.301,21.568s-2.384,20.58-5.129,35.696l18.545,10.107
		// 				C270.186,261.591,275.862,289.072,274.83,302.304z"/>
		// 			<path fill="#545454" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M196.333,396.08c-28-8-74-11-90.33-3
		// 				c-5.67,2.771-10.16,4.91-13.63,6.58c0.398,0.728,13.63,26.08,13.63,26.08s-38,3.33-35.26,0c2.75-3.33,1.26-3.33,0-9.33
		// 				c-1.25-6-15.74-18.34-19.74-24.67s-16.34-28.67-14.34-37s9-7,16.09-10.67c2.3-1.19,30.29-13.76,33.97-14.75
		// 				c4.61-1.24,22.61,4.76,26.61,7.09s32.67-8.33,36.33-9.33c3.67-1,41.311-5.67,41.311-5.67s28.359,13,34.029,22.67
		// 				c5.66,9.66,13.83,61,13.83,61C243.333,406.41,224.333,404.08,196.333,396.08z"/>
		// 			<path fill="#FFFDFD" d="M182.373,234.098l-10.545,14.406l-11.786-8.094h-5.458l16.748,11.375l1.116,0.75
		// 				c0,0,14.888-20,15.136-21.125s-4.714,0.625-4.714,0.625L182.373,234.098z"/>
		// 			<path fill="#545454" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M195,352.745c3.667,3-4.667-9.334-6,4
		// 				s23.667,44.668,31.667,40.334"/>
		// 			<path fill="#545454" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M265.511,357.708
		// 				c0.078,0.322,4.271,18.839,5.712,26.042c1.591,7.88,2.591,13.41,2.591,13.41s10.1,12.51,12.1,12.85
		// 				c2,0.341,13.189,16.57,12.39,22.32c-0.8,5.74-33.17,12.86-47.899,11.55c-14.721-1.31-8.45-1.399-8.45-1.399s0,0-2.79-4.4
		// 				c-2.8-4.39,1.76,1.95-0.61-11.15c-2.37-13.1,1.4-6.439-17.859-23.149c-19.271-16.72-37.48-62.101-26.311-83.41
		// 				s36.78-10.479,47.771-5.42c10.989,5.07,7.79,7.45,14.62,16.58c0.52,0.689,1.06,1.66,1.609,2.86c0.999,2.162,2.061,5.066,3.096,8.459
		// 				C265.083,354.66,265.511,357.708,265.511,357.708z"/>
		// 			<g>
		// 				<path fill="#545454" d="M261.5,342.918c-1.06-3.416-2.111-6.35-3.117-8.527c5.021,0.829,9.76,3.09,10.95,9.02
		// 					c1.79,8.95,2.51,26.46,1.89,40.34c-1.556-7.774-3.683-17.837-5.979-27.132"/>
		// 				<path d="M261.5,342.918c-0.589-1.399-1.19-2.794-1.754-4.201c-0.279-0.707-0.644-1.365-0.957-2.047l-0.951-2.027l-0.453-0.966
		// 					l1.096,0.122c2.354,0.262,4.754,0.854,6.913,2.148c1.072,0.646,2.076,1.471,2.878,2.481c0.804,1.005,1.439,2.159,1.84,3.372
		// 					c0.122,0.298,0.182,0.608,0.274,0.914l0.132,0.496l0.085,0.427l0.336,1.708l0.311,1.715l0.24,1.758
		// 					c0.148,1.17,0.347,2.354,0.445,3.513l0.342,3.493c0.102,1.166,0.154,2.331,0.234,3.496c0.07,1.166,0.158,2.331,0.193,3.497
		// 					l0.129,3.498c0.045,1.166,0.026,2.332,0.042,3.499c0.03,2.332,0.014,4.665-0.048,6.998c-0.042,2.332-0.212,4.665-0.313,6.995
		// 					l-0.451,10.481l-2.109-10.285c-0.464-2.263-0.866-4.539-1.303-6.809c-0.44-2.27-0.832-4.55-1.235-6.829
		// 					c-0.415-2.276-0.771-4.566-1.153-6.854c-0.361-2.291-0.708-4.588-1.02-6.895c0.685,2.215,1.335,4.44,1.971,6.671
		// 					c0.614,2.235,1.254,4.467,1.836,6.712c0.593,2.243,1.198,4.485,1.755,6.738c0.56,2.252,1.153,4.498,1.687,6.757l-2.387,0.196
		// 					c0.014-2.308,0.229-4.609,0.229-6.918v-3.46l-0.229-3.46c-0.031-1.153-0.114-2.308-0.173-3.459l-0.15-3.458
		// 					c-0.021-1.153-0.116-2.303-0.172-3.454c-0.064-1.149-0.114-2.303-0.199-3.45l-0.243-3.441c-0.057-1.158-0.208-2.269-0.309-3.405
		// 					l-0.169-1.698l-0.247-1.72l-0.235-1.725l-0.059-0.432l-0.075-0.348c-0.063-0.253-0.091-0.521-0.179-0.765
		// 					c-0.535-2.022-1.782-3.758-3.515-5.009c-1.738-1.252-3.889-2.004-6.095-2.509l0.643-0.844l0.753,2.183
		// 					c0.232,0.73,0.511,1.448,0.696,2.183C260.773,339.968,261.13,341.445,261.5,342.918z"/>
		// 			</g>
		// 			<g>
		// 				<path fill="#FFFFFF" d="M80.138,380.867c4.727,5.864,9.013,12.058,11.622,17.647"/>
		// 				<path d="M80.138,380.867c0,0,0.885,0.989,2.211,2.473c0.655,0.75,1.46,1.584,2.232,2.567c0.792,0.971,1.638,2.006,2.483,3.041
		// 					c0.439,0.51,0.801,1.072,1.198,1.6c0.388,0.534,0.771,1.061,1.14,1.569c0.37,0.512,0.729,1.006,1.068,1.474
		// 					c0.307,0.494,0.597,0.961,0.865,1.392c1.07,1.738,1.784,2.897,1.784,2.897l-2.719,1.27c0,0-0.516-1.185-1.291-2.962
		// 					c-0.196-0.446-0.409-0.931-0.633-1.442c-0.262-0.496-0.539-1.02-0.826-1.562c-0.288-0.543-0.584-1.104-0.886-1.675
		// 					c-0.312-0.565-0.588-1.168-0.942-1.72c-0.681-1.127-1.361-2.254-2-3.312c-0.62-1.073-1.303-2.018-1.844-2.852
		// 					C80.874,381.971,80.138,380.867,80.138,380.867z"/>
		// 			</g>
		// 			<g>
		// 				<path fill="#FFFFFF" d="M95.996,381.639c-1.964,3.167-4.667,10.724-5.657,14.208"/>
		// 				<path d="M95.996,381.639c0,0-0.354,0.896-0.886,2.24c-0.129,0.337-0.285,0.697-0.42,1.087c-0.119,0.395-0.245,0.81-0.375,1.239
		// 					c-0.256,0.851-0.529,1.757-0.803,2.663c-0.455,1.857-0.98,3.693-1.248,5.085c-0.29,1.382-0.483,2.304-0.483,2.304l-2.886-0.82
		// 					c0,0,0.384-0.904,0.96-2.261c0.554-1.363,1.44-3.092,2.256-4.847c0.459-0.863,0.917-1.727,1.348-2.535
		// 					c0.213-0.4,0.419-0.786,0.614-1.153c0.208-0.355,0.431-0.678,0.622-0.982C95.476,382.446,95.996,381.639,95.996,381.639z"/>
		// 			</g>
		// 			<g>
		// 				<g>
		// 					<path fill="#FFFFFF" d="M72.914,359.493c2.504,4.275,4.673,9.334,4.673,9.334"/>
		// 					<path d="M74.24,358.791c0,0,0.877,2.489,1.754,4.979c0.218,0.623,0.437,1.246,0.642,1.83c0.178,0.602,0.343,1.162,0.486,1.643
		// 						c0.279,0.951,0.465,1.585,0.465,1.585s-0.355-0.554-0.889-1.384c-0.264-0.41-0.572-0.888-0.902-1.4
		// 						c-0.36-0.502-0.744-1.037-1.127-1.571c-1.54-2.139-3.08-4.276-3.08-4.276L74.24,358.791z"/>
		// 				</g>
		// 				<g>
		// 					<path fill="#FFFFFF" d="M72.983,359.638c-2.62-4.205-4.924-9.206-4.924-9.206"/>
		// 					<path d="M71.677,360.375c0,0-0.945-2.465-1.889-4.93c-0.235-0.617-0.471-1.234-0.691-1.813c-0.194-0.596-0.375-1.152-0.53-1.629
		// 						c-0.305-0.943-0.508-1.572-0.508-1.572s0.37,0.544,0.926,1.359c0.275,0.403,0.596,0.873,0.939,1.377
		// 						c0.374,0.491,0.771,1.016,1.17,1.54c1.598,2.096,3.195,4.192,3.195,4.192L71.677,360.375z"/>
		// 				</g>
		// 			</g>
		// 			<path fill="#FCFCFC" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M238.833,434.41"/>
		// 			<path fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M60.833,278.28c1.25,6.63,15.5,10.63,19.5,9.38
		// 				s54-22.461,60.75-25.48c0,0,9.25-4.104,10.25-5.437s4.167-5.5,4.5-7.833s1.167-12.499,0.333-14.333s2.666-3.834-6.167-7.167
		// 				s-27.667-1.833-27.667-1.833l-12.333,5.5l-47.333,39.666L60.833,278.28z"/>
		// 			<path stroke="#000000" stroke-miterlimit="10" d="M70.583,271.41c0,0,4-1.833,4.833-2s4.5,2.499,6.083,3.583s1.583-0.166,2.25,0.667
		// 				s2.667,1.749-0.583,3.333s-5.75,3.25-6.5,3.917s-0.5,1.167-0.5,1.167l1.5-0.417l1.667-0.75l1.25-0.75l1.583-1.167l1.583-0.583
		// 				l1.083-0.25l0.833-0.167l0.833-0.083l0.417-3.5l-1.333-4.25l-0.833-3.75l-0.833-2.667l-0.333-1.416l-4.083,0.25l-4.417,0.75
		// 				l-1.833,2.75l-1.417,3.083L70.583,271.41z"/>
		// 			<path fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M109.811,246.08c4.919,1,14.01,7.5,11.828,14.333
		// 				c-2.182,6.833-25.415,17.499-32.616,17.833c-11.929,0.834-9.928-14-9.928-14L109.811,246.08z"/>
		// 			<path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M93.771,261.723c-2.041-2.722-10.541,3-10.021,5.563
		// 				s3.271,7.998,6.458,7.749s7.063-1.999,7.188-4.562S94.708,262.973,93.771,261.723z"/>
		// 			<path fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M65,172.074
		// 				c4.386,8.537,19.167,29.413,25.833,33.04s14.981,19.464,19.991,23.962s26.009,12.832,48.676,9.332c22.667-3.5,32.5-10.666,34.5-12
		// 				s33.334-25.17,35.334-26.835s10.333-8.328,15.833-15.828s1.667-53.835,1.667-53.835s-0.5-4.499-4-23.999s-19-34-33-46.5
		// 				s-40-17-65.5-15.5s-30.631,2.5-52.565,10s-33.935,33-36.435,50C51.333,116.91,61.452,165.169,65,172.074z"/>
		// 			<path fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M133.333,182.087
		// 				c0.333,4,2.167,13.313,7.75,14.99"/>
		// 			<path fill="#FCFCFC" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M110,245.306c4-6.063-7.167-43.896-20.333-39.896
		// 				c-10,4-59.333,24.666-59,50.333s18,23.667,24,23.667s8.667-5.667,8.667-5.667s11.833-5.333,14-10.667
		// 				c4.5,0.667,14.666-4.833,17.667-9.666C100.833,251.91,106,251.368,110,245.306z"/>
		// 			<path fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M78.5,222.578c3.833,3.167,15.833,27.5,16.5,30.167"
		// 				/>
		// 			<g>
		// 				<path fill="#FFFFFF" d="M131.333,216.754c0,0,57.378-4.998,70.293-33.333"/>
		// 				<path d="M131.333,216.754c0,0,1.246-0.236,3.411-0.685c2.165-0.442,5.247-1.109,8.921-1.96c1.837-0.424,3.816-0.93,5.909-1.445
		// 					c2.089-0.534,4.278-1.145,6.538-1.775c2.258-0.638,4.57-1.366,6.908-2.124c2.343-0.744,4.687-1.598,7.014-2.487
		// 					c2.323-0.894,4.631-1.828,6.844-2.865c1.102-0.529,2.208-1.025,3.27-1.576c0.534-0.269,1.065-0.537,1.593-0.802
		// 					c0.515-0.287,1.025-0.572,1.532-0.854c1.029-0.544,1.984-1.165,2.941-1.74c0.973-0.557,1.853-1.197,2.737-1.789
		// 					c1.737-1.222,3.325-2.456,4.717-3.685c0.73-0.582,1.319-1.247,1.938-1.828c0.302-0.298,0.611-0.576,0.885-0.87
		// 					c0.266-0.301,0.523-0.594,0.773-0.878c1.037-1.112,1.802-2.192,2.468-3.068c0.657-0.88,1.07-1.642,1.405-2.133
		// 					c0.319-0.502,0.489-0.77,0.489-0.77s-0.119,0.293-0.344,0.842c-0.112,0.276-0.252,0.617-0.415,1.017
		// 					c-0.165,0.401-0.339,0.874-0.625,1.352c-0.536,0.977-1.143,2.208-2.074,3.466c-0.222,0.324-0.45,0.659-0.685,1.002
		// 					c-0.245,0.337-0.525,0.66-0.798,1.005c-0.562,0.675-1.127,1.419-1.815,2.094c-1.313,1.419-2.842,2.862-4.574,4.242
		// 					c-1.726,1.387-3.614,2.773-5.681,4.014c-0.514,0.315-1.032,0.633-1.554,0.954c-0.534,0.297-1.072,0.598-1.613,0.899
		// 					c-1.071,0.627-2.198,1.173-3.335,1.724c-2.271,1.102-4.63,2.101-7.007,3.045c-2.4,0.881-4.813,1.721-7.216,2.448
		// 					c-1.197,0.38-2.395,0.718-3.586,1.023c-1.186,0.326-2.367,0.605-3.525,0.89c-2.317,0.572-4.582,1.01-6.729,1.406
		// 					s-4.188,0.708-6.077,0.952C136.421,216.818,131.333,216.753,131.333,216.754z"/>
		// 			</g>
		// 			<path fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M58.667,235.412C60,237.078,76.5,261.079,77,262.412
		// 				"/>
		// 			<line fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" x1="42.833" y1="253.58" x2="62.667" y2="273.413"/>
		// 			<path fill="#545454" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M140.046,159.026
		// 				c7.287,9.384,24.787,22.225,26.287,30.304s10.861-30.304,10.861-30.304s11.69,15.038,12.164,15.711
		// 				c0.475,0.673,10.773-21.917,9.624-21.122s12.351,11.848,12.351,11.848s12.5-10.552,17.507-14.058
		// 				c3.982-2.788,6.484-7.551,9.544-11.583c1.772-2.334,3.596-4.633,5.438-6.913l3.012-3.001c0,0,0.5-46.999-13-43.499
		// 				s-33.332-5.5-63.166,2s-35.834,32.5-35.834,32.5l4.846,34.994L140.046,159.026"/>
		// 			<path fill="#545454" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M116.97,159.167
		// 				c-1.532,9.137-1.138,18.358-2.068,27.535c-0.26,2.563-0.609,5.127-0.458,7.709c0,0-8.11-1.715-15.11-6.857s-7.864-7.143-7.864-7.143
		// 				c0.273,3.51,0.543,7.021,0.854,10.528c0.142,1.592,0.258,3.193,0.461,4.778c0.267,2.077,1.081,4.437,0.265,6.484
		// 				c0,0-4.845,0.635-16.05-1.791c-16.167-3.5-20.508-9.715-22.587-12.857s-1.746,13.357-1.663,12.857s-6.917-2.479-11.917-19.489
		// 				s-13.077-25.783-8.437-28.036s35.759-24.975,38.348-34.975s3.423-3.5,7.756-3.5S116.97,159.167,116.97,159.167"/>
		// 			<g>
		// 				<path fill="#545454" d="M46.833,167.41c1.5,6.5,5.529,17.396,7.58,20.143"/>
		// 				<path d="M46.833,167.41c0,0,0.106,0.321,0.293,0.883c0.197,0.558,0.43,1.374,0.796,2.318c0.362,0.947,0.747,2.053,1.241,3.219
		// 					c0.468,1.173,0.988,2.414,1.541,3.64c0.525,1.237,1.125,2.438,1.655,3.575c0.271,0.565,0.56,1.094,0.818,1.604
		// 					c0.265,0.504,0.5,0.996,0.756,1.409c0.246,0.421,0.472,0.807,0.671,1.148c0.192,0.361,0.392,0.581,0.54,0.797
		// 					c0.299,0.416,0.47,0.653,0.47,0.653l-2.404,1.795c0,0-0.182-0.337-0.501-0.928c-0.149-0.292-0.373-0.658-0.515-1.05
		// 					c-0.163-0.396-0.347-0.843-0.547-1.331c-0.213-0.485-0.38-1.015-0.582-1.572c-0.192-0.559-0.412-1.143-0.606-1.754
		// 					c-0.377-1.226-0.811-2.52-1.165-3.835c-0.382-1.306-0.729-2.621-1.034-3.857c-0.329-1.228-0.563-2.402-0.791-3.391
		// 					c-0.233-0.99-0.351-1.827-0.469-2.407C46.895,167.743,46.833,167.41,46.833,167.41z"/>
		// 			</g>
		// 			<g>
		// 				<path fill="#545454" d="M177.195,143.535c0,0,0.063,15.453-1.238,20.407"/>
		// 				<path d="M177.195,143.535c0,0,0.086,1.281,0.214,3.202c0.111,1.923,0.261,4.489,0.325,7.065c0.052,1.287,0.058,2.58,0.063,3.794
		// 					c0.029,1.211-0.039,2.36-0.066,3.343c-0.017,0.493-0.021,0.94-0.084,1.361c-0.049,0.417-0.091,0.779-0.125,1.078
		// 					c-0.072,0.602-0.113,0.945-0.113,0.945l-2.902-0.762c0,0,0.076-0.286,0.208-0.785c0.067-0.252,0.149-0.557,0.243-0.908
		// 					c0.108-0.342,0.177-0.772,0.261-1.234c0.162-0.926,0.388-2,0.534-3.186c0.168-1.179,0.349-2.44,0.483-3.711
		// 					c0.31-2.537,0.536-5.09,0.705-7.005C177.093,144.813,177.195,143.535,177.195,143.535z"/>
		// 			</g>
		// 			<g>
		// 				<path fill="#545454" d="M199.583,128.66c0,0,0.959,20.184-1.333,27.467"/>
		// 				<path d="M199.583,128.66c0,0,0.696,6.871,0.896,13.807c0.104,3.468,0.08,6.952-0.135,9.605c-0.043,0.662-0.104,1.273-0.185,1.82
		// 					c-0.076,0.547-0.117,1.019-0.216,1.423c-0.168,0.803-0.264,1.262-0.264,1.262l-2.861-0.9c0,0,0.121-0.375,0.333-1.032
		// 					c0.121-0.319,0.206-0.757,0.328-1.242c0.128-0.483,0.247-1.043,0.355-1.667c0.476-2.474,0.875-5.881,1.144-9.306
		// 					C199.53,135.575,199.583,128.66,199.583,128.66z"/>
		// 			</g>
		// 			<g>
		// 				<path fill-rule="evenodd" clip-rule="evenodd" d="M121.626,5.129c1.33-0.517,2.659-1.032,3.988-1.547
		// 					c0.987-0.156,1.97-0.383,2.963-0.458c2.683-0.199,5.734-1.047,7.415,1.783c0.885,1.492,1.648,1.475,3.1,1.303
		// 					c18.361-2.171,36.25-0.598,53.255,6.687c24.454,10.476,42.802,26.877,50.955,52.715c2.492,7.898,4.336,16.002,6.446,24.021
		// 					c0.407,1.542,0.679,3.122,0.995,4.688c1.358,6.694-2.21,10.653-9.294,10.276c-10.341-0.549-20.684-1.058-31.011-1.74
		// 					c-2.011-0.134-2.883,0.596-3.674,2.243c-4.146,8.614-8.252,17.184-14.242,24.866c-8.754,11.228-18.755,20.822-31.873,26.82
		// 					c-11.771,5.38-24.069,5.832-36.544,3.557c-8.542-1.56-17.024-3.435-25.589-4.863c-14.616-2.434-29.234-5.072-44.235-2.823
		// 					c-2.067,0.31-3.409,1.044-4.626,2.797c-3.45,4.971-7.043,9.855-10.789,14.613c-6.022,7.648-13.024,14.289-21.613,19.103
		// 					c-3.076,1.724-6.377,2.244-9.527,0.204c-3.032-1.961-4.038-4.974-3.374-8.356c0.436-2.219,1.089-4.621,2.393-6.418
		// 					c3.488-4.809,6.946-9.772,11.203-13.879c7.558-7.289,15.646-14.048,23.627-20.896c1.968-1.688,2.591-3.3,2.265-5.89
		// 					c-2.302-18.232-2.177-36.456,1.582-54.589c2.466-11.894,6.041-23.392,13.64-33.286c14.79-19.254,34.687-30.335,58.134-35.663
		// 					c1.421-0.323,2.368-0.522,2.585-2.279C119.911,7.067,120.979,6.121,121.626,5.129z M198.884,22.731
		// 					c0.015-0.114-0.04-0.216-0.164-0.308c-1.65-1.16-3.194-3.177-5.483-1.609c-1.184,0.812,0.362,4.322,2.656,5.702
		// 					c1.604,0.965,3.758,2.894,5.312,0.707C202.525,25.364,200.461,23.857,198.884,22.731z M182.531,138.758
		// 					c-3.318,2.302-6.6,4.663-9.963,6.898c-12.649,8.409-26.287,12.739-41.564,10.023c-5.877-1.044-11.737-2.177-17.597-3.312
		// 					c-12.211-2.36-24.31-5.788-36.649-6.904c-24.525-2.221-46.195,4.679-63.013,23.723c-3.408,3.858-6.062,8.113-7.294,13.108
		// 					c-0.59,2.394,0.237,4.447,2.316,5.699c1.01,0.607,2.4,0.602,3.618,0.875c0.096-0.269,0.192-0.538,0.289-0.806
		// 					c-2.802-1.607-3.114-4.128-2.331-6.817c0.527-1.811,1.252-3.675,2.338-5.208c6.558-9.258,14.735-16.954,25.381-21.142
		// 					c13.208-5.195,27.163-6.186,41.077-4.148c16.025,2.346,31.934,5.412,47.905,8.095c14.617,2.458,28.479,0.518,41.242-7.595
		// 					C173.673,147.826,179.115,144.49,182.531,138.758z M120.614,9.333c5.198-1.073,10.021-2.068,15.188-3.135
		// 					C131.986,2.365,122.377,4.36,120.614,9.333z"/>
		// 				<path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M182.531,138.758c-3.416,5.732-8.857,9.068-14.245,12.49
		// 					c-12.764,8.112-26.625,10.052-41.242,7.595c-15.971-2.683-31.88-5.749-47.905-8.095c-13.915-2.038-27.869-1.047-41.077,4.148
		// 					c-10.646,4.188-18.823,11.884-25.381,21.142c-1.085,1.533-1.811,3.397-2.338,5.208c-0.784,2.689-0.472,5.209,2.331,6.817
		// 					c-0.097,0.268-0.193,0.537-0.289,0.806c-1.218-0.273-2.608-0.268-3.618-0.875c-2.079-1.252-2.906-3.306-2.316-5.699
		// 					c1.233-4.995,3.886-9.25,7.294-13.108c16.817-19.044,38.487-25.944,63.013-23.723c12.34,1.116,24.438,4.544,36.649,6.904
		// 					c5.86,1.135,11.72,2.268,17.597,3.312c15.277,2.715,28.915-1.614,41.564-10.023C175.931,143.42,179.212,141.06,182.531,138.758z"/>
		// 				<path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M120.614,9.333c1.763-4.973,11.372-6.968,15.188-3.135
		// 					C130.636,7.265,125.812,8.26,120.614,9.333z"/>
		// 				<path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M198.884,22.731c1.577,1.125,3.641,2.632,2.32,4.492
		// 					c-1.554,2.187-3.707,0.258-5.312-0.707c-2.294-1.38-3.84-4.89-2.656-5.702c2.289-1.568,3.833,0.449,5.483,1.609
		// 					c-0.663-0.196-1.436-0.703-1.96-0.513c-0.68,0.245-1.159,1.044-1.724,1.606c1.076,0.929,2.102,1.931,3.268,2.737
		// 					c0.291,0.204,1.031-0.211,1.564-0.343C199.541,24.851,199.212,23.791,198.884,22.731z"/>
		// 				<path fill-rule="evenodd" clip-rule="evenodd" d="M198.884,22.731c0.328,1.06,0.656,2.12,0.984,3.179
		// 					c-0.533,0.132-1.273,0.547-1.564,0.343c-1.166-0.806-2.191-1.808-3.268-2.737c0.564-0.562,1.044-1.361,1.724-1.606
		// 					c0.524-0.19,1.297,0.316,1.96,0.513C198.844,22.515,198.899,22.617,198.884,22.731z"/>
		// 			</g>
		// 			<path fill="#FCFCFC" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M108.583,439.49
		// 				c-2.14-6.85-3.88-12.08-3.88-12.08l-31.6,1.39c3.45-0.189,9.99-0.58,13.56-1.06c4.85-0.64,21.49-0.35,22-0.33
		// 				C108.374,427.41,108.483,433.7,108.583,439.49z"/>
		// 			<path fill="#FCFCFC" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M285.667,246.08
		// 				c-3.333,3.666-18.666,15.867-28.333,16.1S236,258.078,234,250.412s-2.212-12.338-2.272-16.669"/>
		// 			<path fill="#FCFCFC" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M306.777,78.954
		// 				c-0.269-0.332-6.776-5.542-11.109-4.875c-4.327,0.666-6.66,3.325-6.668,3.332c0.371-0.298-8-7.515-8.916-8.074
		// 				c-5.977-3.647-11.942-4.061-15.573,2.743c-2.49,4.667-2.177,8.333-2.177,8.333c-2.597-4.219-7.78-6.594-12.579-5.566
		// 				c-7.56,1.618-9.592,9.927-10.637,16.442c-1.657,10.332-0.944,20.825-0.368,31.214c0.618,11.157,0.857,22.335,0.66,33.508
		// 				c-0.108,6.181-0.35,12.36-0.731,18.53c-0.2,3.236-1.218,6.372-0.901,9.628c-3.825-8.949-8.342-20.171-16.443-26.091
		// 				c-8.667-6.333-26-4.333-21.666,7c1.852,4.843,3.105,9.864,5.566,14.449c4.439,8.273,12.129,15.84,13.468,25.466
		// 				c0.737,5.296-0.574,10.236,2.299,15.085c5.333,9,2,9.333,15.667,16.333s11.666,7.334,29,6.667s20.666,5.333,32.666,0
		// 				s22.334-9.333,25-29.333c0.917-6.88,1.9-13.766,2.451-20.688c1.011-12.697,0.424-25.377,1.827-38.071
		// 				c1.307-11.825,2.899-23.732,2.303-35.655c-0.311-6.198-1.214-12.479-3.581-18.253c-2.25-4.5-6.938-6.938-10.688-6.047
		// 				c0,0-0.112-0.254-0.291-0.657"/>
		// 			<g>
		// 				<path fill="#FCFCFC" d="M255,164.41c16.667-2.333,52.667,0.333,58.667,3"/>
		// 				<path d="M254.983,164.261c0,0,0.224-0.074,0.643-0.212c0.42-0.131,1.031-0.36,1.818-0.578c0.778-0.246,1.754-0.479,2.882-0.714
		// 					c0.565-0.12,1.167-0.248,1.802-0.383c0.63-0.116,1.296-0.205,1.991-0.315c0.696-0.105,1.421-0.214,2.172-0.327
		// 					c0.75-0.094,1.527-0.154,2.327-0.237c1.601-0.17,3.286-0.302,5.032-0.36c0.874-0.045,1.762-0.071,2.66-0.093
		// 					c0.898-0.034,1.808-0.045,2.724-0.03c1.831,0.033,3.691,0.063,5.551,0.125c1.856,0.132,3.713,0.238,5.537,0.403
		// 					c1.827,0.125,3.614,0.401,5.346,0.621c1.733,0.191,3.399,0.537,4.977,0.814c1.581,0.281,3.065,0.635,4.431,0.971
		// 					c1.371,0.35,2.611,0.679,3.709,1.062c1.099,0.336,2.042,0.702,2.813,1.042c0.771,0.287,1.355,0.646,1.744,0.877
		// 					c0.384,0.226,0.588,0.346,0.588,0.346c0.073,0.041,0.099,0.133,0.058,0.206c-0.036,0.063-0.112,0.09-0.179,0.069
		// 					c0,0-0.216-0.072-0.62-0.207c-0.201-0.067-0.45-0.151-0.743-0.249c-0.297-0.086-0.651-0.154-1.041-0.247
		// 					c-0.777-0.197-1.737-0.375-2.844-0.558c-1.1-0.212-2.359-0.351-3.725-0.553c-2.74-0.342-5.945-0.685-9.39-0.948
		// 					c-1.721-0.143-3.501-0.266-5.312-0.37c-1.809-0.125-3.649-0.191-5.489-0.284c-1.84-0.079-3.68-0.158-5.491-0.235
		// 					c-1.813-0.039-3.596-0.115-5.322-0.12c-3.453-0.039-6.678-0.024-9.437,0.092c-1.381,0.041-2.646,0.099-3.762,0.188
		// 					c-1.117,0.08-2.093,0.125-2.895,0.229c-1.604,0.174-2.52,0.274-2.52,0.274c-0.082,0.009-0.155-0.05-0.164-0.131
		// 					c-0.008-0.071,0.036-0.136,0.101-0.157L254.983,164.261z"/>
		// 			</g>
		// 			<g>
		// 				<path fill="#FCFCFC" d="M301,194.744c8.667-5-33.666,27.333-18.333,39"/>
		// 				<path d="M301,194.744c0,0,0.149-0.128,0.45-0.347c0.172-0.102,0.293-0.253,0.659-0.354c0.051,0.007,0.068-0.012,0.149,0.033
		// 					c0.076,0.041,0.11,0.124,0.117,0.195c0.001,0.099-0.022,0.148-0.038,0.197c-0.035,0.088-0.072,0.162-0.114,0.234
		// 					c-0.084,0.143-0.177,0.282-0.277,0.427c-0.808,1.147-2.058,2.655-3.576,4.436c-1.513,1.769-3.278,3.833-5.169,6.043
		// 					c-0.949,1.093-1.876,2.265-2.85,3.422c-0.965,1.165-1.917,2.366-2.828,3.592c-0.93,1.211-1.815,2.449-2.651,3.682
		// 					c-0.819,1.243-1.621,2.464-2.28,3.701c-0.651,1.237-1.24,2.447-1.66,3.633c-0.406,1.187-0.692,2.334-0.78,3.405
		// 					c-0.078,1.069,0.011,2.058,0.247,2.911c0.24,0.85,0.593,1.566,0.948,2.125c0.363,0.553,0.694,0.976,0.94,1.245
		// 					c0.248,0.272,0.38,0.418,0.38,0.418s-0.176-0.09-0.491-0.287c-0.313-0.2-0.775-0.503-1.289-0.995
		// 					c-0.51-0.491-1.099-1.163-1.556-2.083c-0.471-0.91-0.816-2.057-0.902-3.326c-0.214-2.553,0.539-5.458,1.796-8.218
		// 					c0.639-1.382,1.358-2.774,2.203-4.108c0.829-1.345,1.753-2.647,2.709-3.917c0.977-1.255,1.988-2.475,3.008-3.65
		// 					c1.011-1.183,2.089-2.27,3.113-3.33c1.023-1.063,2.069-2.034,3.058-2.952c0.981-0.925,1.947-1.758,2.84-2.522
		// 					c1.774-1.537,3.328-2.737,4.346-3.618c0.125-0.111,0.241-0.218,0.338-0.318l0.125-0.136c0.016-0.016,0.02-0.031,0.024-0.001
		// 					c0.001,0.098,0.138,0.148,0.124,0.122c-0.158-0.01-0.428,0.094-0.583,0.146C301.185,194.676,301,194.744,301,194.744z"/>
		// 			</g>
		// 			<g>
		// 				<path fill="#FCFCFC" d="M269,233.743c5.667-15.666-4.667-34.667-11.667-36.667"/>
		// 				<path d="M269,233.743c0,0,0.094-0.648,0.259-1.782c0.059-0.565,0.152-1.228,0.205-2.008c0.075-0.772,0.093-1.648,0.125-2.591
		// 					c0.018-1.893-0.09-4.082-0.435-6.394c-0.153-1.157-0.392-2.34-0.641-3.538c-0.286-1.19-0.568-2.402-0.95-3.588
		// 					c-0.708-2.386-1.627-4.71-2.616-6.828c-0.504-1.054-1.014-2.064-1.543-2.999c-0.554-0.914-1.068-1.795-1.614-2.555
		// 					c-0.542-0.764-1.069-1.444-1.578-2.012c-0.514-0.562-0.986-1.04-1.418-1.384c-0.429-0.345-0.787-0.614-1.054-0.752
		// 					c-0.266-0.154-0.407-0.236-0.407-0.236s0.163,0.026,0.468,0.075c0.157,0.021,0.344,0.067,0.56,0.137
		// 					c0.22,0.063,0.476,0.138,0.739,0.265c0.547,0.223,1.189,0.558,1.864,1.029c0.684,0.462,1.416,1.042,2.131,1.755
		// 					c1.47,1.394,2.916,3.271,4.203,5.431c0.627,1.088,1.241,2.237,1.753,3.453c0.538,1.206,0.988,2.47,1.383,3.752
		// 					c0.775,2.567,1.247,5.23,1.362,7.747c0.082,1.255,0.025,2.477-0.054,3.624c-0.073,1.149-0.249,2.227-0.449,3.208
		// 					c-0.2,0.981-0.441,1.866-0.71,2.632c-0.228,0.772-0.541,1.424-0.758,1.955c-0.227,0.528-0.465,0.913-0.599,1.189
		// 					C269.08,233.599,269,233.743,269,233.743z"/>
		// 			</g>
		// 			<path fill="#FCFCFC" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M279.29,178.077"/>
		// 			<path fill="#FCFCFC" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M265.358,163.745
		// 				c0.977-8.729,0.91-17.731,0.854-26.332c-0.101-15.266-0.383-30.663-1.528-45.889c-0.385-5.109-0.84-10.213-1.511-15.292"/>
		// 			<path fill="#FCFCFC" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M306.508,78.622
		// 				c2.724,3.717,3.686,8.417,4.427,12.872c0.557,3.348,1.315,3.561,4.711,3.537"/>
		// 			<path fill="#FCFCFC" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M306.92,165.67
		// 				c1.603-14.092,5.939-49.076,4.859-72.281"/>
		// 			<path fill="#FCFCFC" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M288.25,163.693
		// 				c2.084-10.875,5.846-32.997,4.083-55.033c-1.225-15.298-2.489-25.728-3.593-32.852"/>
		// 			<path fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M7.867,485.083
		// 				c2.155,1.894,5.582,3.914,11.966,4.827c10.5,1.5,26.5-0.5,31.5-3s39-12,39-12l24-8.5l9.5-3.5"/>
		// 			<path fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M25.333,478.41c9,0,16.5,10,16.5,10"/>
		// 			<path fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M58.224,453.91c-0.16,0.25-0.32,0.5-0.48,0.75
		// 				l-2.37,2.38L58.224,453.91z"/>
		// 			<path fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M127.333,473.41c-1.5,4-23,8.5-23,8.5
		// 				s-55,14-64.5,16c-9.5,3.5-30.499-1-30.5-1c-0.842-0.181-1.431-2.91-1.589-3.495c-0.861-3.17-0.38-6.067,1.692-8.669
		// 				c1.429-1.793,3.137-3.599,5.152-4.729c1.889-1.06,4.005-1.386,6.137-1.532c4.247-0.291,8.053-0.786,12.006-2.462
		// 				c3.434-1.455,6.883-3.06,9.947-5.203c2.936-2.053,5.583-4.553,8.053-7.139c2.37-2.482,4.432-5.188,6.348-8.03
		// 				c0.222-0.33,0.45-0.656,0.664-0.991c0.16-0.25,0.32-0.5,0.48-0.75c8.18-12.99,15.65-26.72,16.41-27.03
		// 				c0.99-0.41,34.16-2.029,34.2-1.97c0.01,0.01,4.5,6.01,9,18.5c2.68,7.43,6.06,15.22,8.05,21.15
		// 				C127.233,468.61,127.943,471.79,127.333,473.41z"/>
		// 			<path fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M74.003,426.75c0,0-15.41,25.62-17.25,29.04
		// 				c1.28-3.32,8.81-27.89,9.13-29.63L74.003,426.75z"/>
		// 			<path fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M56.583,456.16c-0.03,0.02,0.03-0.11,0.16-0.35
		// 				C56.664,456.03,56.604,456.15,56.583,456.16z"/>
		// 			<path fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M65.883,425.91h-0.05
		// 				C65.894,425.91,65.903,425.91,65.883,425.91z"/>
		// 			<path fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M72.241,446.433
		// 				c-0.049-0.356-0.192-0.692-0.473-0.977c-1.841-1.864-6.952-1.197-9.353-1.398c-1.704-0.144-3.393-0.386-5.082-0.647
		// 				c-1.856,4.529-3.088,8.892-6.587,12.377c-2.76,2.749-5.609,5.406-8.53,7.986c-0.71,0.627-1.323,1.38-2.133,1.887
		// 				c0,0-12,7.5-12.375,7.5s-2.75,2-2.75,2s-3.375,1.625,0,5.25s7.375,2.125,9.125,2c2.453-0.176,5.373-2.243,7.511-3.315
		// 				c3.73-1.87,7.222-3.688,10.041-6.852c1.897-2.127,3.766-4.287,5.649-6.428c3.07-3.486,5.976-7.128,9.077-10.583
		// 				c1.839-2.05,3.949-3.943,5.26-6.408C71.973,448.163,72.352,447.245,72.241,446.433z"/>
		// 			<g>
		// 				<g>
		// 					<path d="M26.023,475.721c2.543,2.493,5.457,4.539,8.429,6.484c1.624,1.063,3.125-1.535,1.514-2.59
		// 						c-2.764-1.81-5.456-3.697-7.821-6.016C26.762,472.245,24.64,474.365,26.023,475.721L26.023,475.721z"/>
		// 				</g>
		// 			</g>
		// 			<g>
		// 				<g>
		// 					<path d="M55.827,448.955c3.919,1.83,7.979,2.883,12.257,3.455c1.913,0.256,1.888-2.747,0-3c-3.717-0.497-7.34-1.456-10.743-3.045
		// 						C55.599,445.552,54.075,448.138,55.827,448.955L55.827,448.955z"/>
		// 				</g>
		// 			</g>
		// 			<g>
		// 				<g>
		// 					<path d="M52.435,454.856c3.139,1.022,6.203,2.234,9.25,3.5c1.787,0.742,2.558-2.162,0.798-2.893
		// 						c-3.047-1.266-6.112-2.479-9.25-3.5C51.387,451.363,50.604,454.261,52.435,454.856L52.435,454.856z"/>
		// 				</g>
		// 			</g>
		// 			<g>
		// 				<g>
		// 					<path d="M47.577,460.83c2.903,1.271,5.765,2.633,8.625,4c1.736,0.83,3.259-1.756,1.514-2.59c-2.859-1.367-5.721-2.729-8.625-4
		// 						C47.336,457.472,45.808,460.056,47.577,460.83L47.577,460.83z"/>
		// 				</g>
		// 			</g>
		// 			<g>
		// 				<g>
		// 					<path d="M41.273,465.596c2.9,2.774,6.521,4.284,10.287,5.511c1.845,0.602,2.629-2.296,0.798-2.893
		// 						c-3.268-1.064-6.442-2.328-8.963-4.739C41.997,462.138,39.873,464.256,41.273,465.596L41.273,465.596z"/>
		// 				</g>
		// 			</g>
		// 			<g>
		// 				<g>
		// 					<path d="M36.327,470.08c3.437,1.485,6.79,3.113,9.875,5.25c1.595,1.105,3.092-1.497,1.514-2.59
		// 						c-3.084-2.138-6.438-3.766-9.875-5.25C36.084,466.731,34.555,469.315,36.327,470.08L36.327,470.08z"/>
		// 				</g>
		// 			</g>
		// 			<g>
		// 				<g>
		// 					<path d="M31.952,472.58c3.083,1.851,6.163,3.708,9.125,5.75c1.597,1.102,3.095-1.5,1.514-2.59
		// 						c-2.962-2.042-6.041-3.899-9.125-5.75C31.802,468.992,30.295,471.586,31.952,472.58L31.952,472.58z"/>
		// 				</g>
		// 			</g>
		// 			<path fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M124.333,464.66c-1.75,0.5-83.25,27-90,26
		// 				s-22-1.75-24.25-6"/>
		// 			<path fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M94.333,425.41c0,0,14,40.5,14,42.5"/>
		// 			<line fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" x1="101.333" y1="426.41" x2="114.333" y2="466.41"/>
		// 			<path fill="#FCFCFC" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M311,468.737c-9.334,0-34.666,8.013-39,11.673
		// 				s-17.334,0-17.334,0l10.667,18.327c0,0,10.999,9.666,15.333,10.333s18.001,0.334,21.334-0.333s23.334-6.333,24-11.333
		// 				s0.667-23.333-2-26s-11.001-11-12.334-11.667S311,468.737,311,468.737z"/>
		// 			<path fill="#FCFCFC" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M287.667,425.736c0,0,31,39.333,32,44.333
		// 				c0.042,0.21,0.065,0.434,0.071,0.671c0.296,12.464-12.137,19.777-22.741,20.958c-9.288,1.034-22.715,3.976-31.663,0.038
		// 				c-8.333-3.667-11.667-15.667-11.667-15.667l-7-40c0,0,0-3.999-1-7.666s2.334-10.667,12.667-14.667S287.667,425.736,287.667,425.736z
		// 				"/>
		// 			<path fill="#FCFCFC" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M318.333,471.072c-4-1-41.667,2.995-53,20.664"/>
		// 			<g>
		// 				<path fill="#FCFCFC" d="M285.952,424.368c3.572,6.13,19.94,36.722,22.725,40.771c2.783,4.045,5.151,7.444,5.151,7.444"/>
		// 				<path d="M286.083,424.294c0,0,0.147,0.167,0.425,0.479c0.271,0.315,0.699,0.761,1.181,1.364c0.989,1.19,2.371,2.91,3.902,5.046
		// 					c0.778,1.059,1.598,2.227,2.416,3.486c0.831,1.253,1.723,2.566,2.563,3.972c0.843,1.403,1.786,2.814,2.612,4.321
		// 					c0.852,1.487,1.717,2.998,2.582,4.509c0.814,1.535,1.629,3.071,2.431,4.583c0.818,1.503,1.508,3.047,2.237,4.507
		// 					c0.746,1.416,1.391,2.813,2.022,4.147c0.656,1.314,1.179,2.626,1.74,3.798c1.24,2.319,2.176,4.319,2.81,5.734
		// 					c0.328,0.699,0.54,1.281,0.704,1.663c0.159,0.387,0.243,0.594,0.243,0.594l-0.246,0.17c0,0-1.998-2.854-4.994-7.134
		// 					c-0.711-1.098-1.401-2.338-2.176-3.622c-0.764-1.291-1.568-2.653-2.4-4.063c-1.595-2.851-3.296-5.891-4.997-8.931
		// 					c-3.317-6.125-6.635-12.251-9.123-16.845c-2.516-4.579-4.193-7.632-4.193-7.632L286.083,424.294z"/>
		// 			</g>
		// 			<g>
		// 				<path fill="#FCFCFC" d="M248.333,438.738c0,0,0.334,0.834,0.904,2.333c1.406,3.692,4.251,11.421,7.096,20.667
		// 					c4,13,13.667,24,13.667,24"/>
		// 				<path d="M248.473,438.684c0,0,0.118,0.173,0.341,0.496c0.215,0.325,0.564,0.79,0.941,1.408c0.395,0.646,0.848,1.38,1.331,2.267
		// 					c0.495,0.877,1.051,1.866,1.602,2.966c0.561,1.1,1.203,2.265,1.742,3.571c0.563,1.297,1.172,2.662,1.713,4.107
		// 					c0.544,1.443,1.186,2.91,1.693,4.449c0.267,0.766,0.536,1.537,0.807,2.312l0.203,0.581l0.025,0.073l0.013,0.036
		// 					c-0.081-0.242-0.019-0.057-0.034-0.106l0.007,0.018l0.055,0.143l0.109,0.285l0.437,1.141c0.545,1.516,1.013,3.162,1.667,4.454
		// 					c0.658,1.354,1.044,2.76,1.761,4.083c0.317,0.669,0.652,1.314,0.929,1.978c0.277,0.662,0.574,1.299,0.896,1.903
		// 					c0.306,0.614,0.623,1.199,0.896,1.79c0.271,0.592,0.535,1.165,0.824,1.693c0.578,1.057,1.036,2.084,1.495,2.962
		// 					c0.475,0.866,0.838,1.668,1.168,2.307c0.344,0.627,0.57,1.162,0.748,1.508c0.178,0.347,0.271,0.532,0.271,0.532l-0.225,0.197
		// 					c0,0-0.538-0.618-1.436-1.73c-0.436-0.565-0.965-1.253-1.572-2.042c-0.604-0.791-1.229-1.724-1.942-2.719
		// 					c-0.718-0.994-1.391-2.14-2.159-3.314c-0.788-1.164-1.442-2.498-2.216-3.821c-0.797-1.31-1.393-2.794-2.107-4.24
		// 					c-0.754-1.44-1.228-2.998-1.816-4.519c-0.571-1.524-1.058-3.108-1.55-4.62c-0.492-1.524-0.977-3.025-1.445-4.478
		// 					c-0.469-1.453-0.922-2.856-1.352-4.188c-0.424-1.334-0.905-2.569-1.306-3.723c-0.826-2.299-1.514-4.215-1.995-5.556
		// 					c-0.508-1.333-0.798-2.094-0.798-2.094L248.473,438.684z"/>
		// 			</g>
		// 			<path fill="#FCFCFC" stroke="#000000" stroke-miterlimit="10" d="M305.892,461.09"/>
		// 			<path fill="#FCFCFC" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M246.667,436.069
		// 				c-4.833-4.659-13.833-14.159-13.833-14.159c31.5-33.5,56-12,56-12l-1,19"/>
		// 			<path fill="#FCFCFC" stroke="#000000" stroke-miterlimit="10" d="M245.333,431.91"/>
		// 			<g>
		// 				<g>
		// 					<path d="M304.435,458.714c-12.954,5.047-27.107,7.603-38.483,16.026c-1.536,1.137-0.043,3.743,1.514,2.59
		// 						c11.167-8.268,25.05-10.769,37.767-15.724C307.014,460.912,306.24,458.011,304.435,458.714L304.435,458.714z"/>
		// 				</g>
		// 			</g>
		// 			<g>
		// 				<g>
		// 					<path d="M300.81,451.589c-14.089,2.67-26.749,7.437-38.983,14.901c-1.648,1.006-0.143,3.601,1.514,2.59
		// 						c12.015-7.33,24.449-11.979,38.267-14.599C303.506,454.121,302.7,451.23,300.81,451.589L300.81,451.589z"/>
		// 				</g>
		// 			</g>
		// 			<g>
		// 				<g>
		// 					<path d="M297.083,444.41c-14.123,0.773-27.357,5.071-39.132,12.955c-1.599,1.07-0.099,3.67,1.514,2.59
		// 						c11.341-7.593,24.004-11.8,37.618-12.545C299.007,447.305,299.017,444.305,297.083,444.41L297.083,444.41z"/>
		// 				</g>
		// 			</g>
		// 			<g>
		// 				<g>
		// 					<path d="M291.31,435.089c-12.873,2.969-25.335,5.98-36.733,12.901c-1.651,1.002-0.145,3.597,1.514,2.59
		// 						c11.183-6.789,23.405-9.69,36.017-12.599C293.992,437.547,293.193,434.654,291.31,435.089L291.31,435.089z"/>
		// 				</g>
		// 			</g>
		// 			<g>
		// 				<g>
		// 					<path d="M287.56,427.714c-13.678,2.383-26.434,3.272-38.858,10.026c-1.7,0.924-0.187,3.515,1.514,2.59
		// 						c12.174-6.617,24.767-7.394,38.142-9.724C290.26,430.275,289.452,427.384,287.56,427.714L287.56,427.714z"/>
		// 				</g>
		// 			</g>
		// 		</svg>
        //         <h1>Web Developer</h1>
        //     </div>
        // </div>
    )
}

export default Home;