const lectures = [
	{
		topic: 'Introduction',
		date: 'August 31, 2021',
		link: '/ppt/Lecture1.Introduction.pdf'
		, file: "Ture"
	}, 
	{
		topic: 'Linear Algebra 1',
		date: 'September 2, 2021',
		link: '/ppt/Lec2 LinearAlgebra1.pdf'
		, file: "Ture"
	},
	{
		topic: 'Linear Algebra 2',
		date: 'September 7, 2021',
		link: '/ppt/Lec3 LinearAlgebra2.pdf'
		, file: "True"
	},{
		topic: 'Optimization',
		date: 'September 9, 2021',
		link: '#'
		, file: "Flase"
	},{
		topic: 'Deterministic Representations 1',
		date: 'September 14, 2021',
		link: '#'
		, file: "Flase"
	},{
		topic: 'Data-Driven Representations 2',
		date: 'September 16, 2021',
		link: '#'
		, file: "Flase"
	},{
		topic: 'Classification and Metaclassifiers',
		date: 'September 21, 2021',
		link: '#'
		, file: "Flase"
	},{
		topic: 'Face Detection',
		date: 'September 23, 2021',
		link: '#'
		, file: "Flase"
	},
	{
		topic: 'Non-Negative Matrix Factorization',
		date: 'September 28, 2021',
		link: '#'
		, file: "Flase"
	},{
		topic: 'Probability and Statistics',
		date: 'September 30, 2021',
		link: '#'
		, file: "Flase"
	},{
		topic: 'Independent Component Analysis 1',
		date: 'October 5, 2021',
		link: '#'
		, file: "Flase"
	},{
		topic: 'Independent Component Analysis 2',
		date: 'October 7, 2021',
		link: '#'
		, file: "Flase"
	},{
		topic: 'Clustering',
		date: 'October 12, 2021',
		link: '#'
		, file: "Flase"
	},{
		topic: 'Happy holiday !!!',
		date: 'October 14, 2021',
		link: '#'
		, file: "Flase"
	},{
		topic: 'Dictionary Representations',
		date: 'October 19, 2021',
		link: '#'
		, file: "Flase"
	},{
		topic: 'Guest Lecture: Compressed Sensing',
		date: 'October 21, 2021',
		link: '#'
		, file: "Flase"
	},{
		topic: 'Regression and Prediction',
		date: 'October 26, 2021',
		link: '#'
		, file: "Flase"
	},{
		topic: 'Linear Classifiers',
		date: 'October 28, 2021',
		link: '#'
		, file: "Flase"
	},{
		topic: 'Expectation Maximization 1',
		date: 'November 2, 2021',
		link: '#'
		, file: "Flase"
	},{
		topic: 'Expectation Maximization 1',
		date: 'November 4, 2021',
		link: '#'
		, file: "Flase"
	},{
		topic: 'Factor Analysis',
		date: 'November 9, 2021',
		link: '#'
		, file: "Flase"
	},{
		topic: 'Supervised Representations',
		date: 'November 11, 2021',
		link: '#'
		, file: "Flase"
	},{
		topic: 'Hidden Markov Models 1',
		date: 'November 16, 2021',
		link: '#'
		, file: "Flase"
	},{
		topic: 'Hidden Markov Models 2',
		date: 'November 18, 2021',
		link: '#'
		, file: "Flase"
	},{
		topic: 'Non-Linear Dynamical Systems',
		date: 'November 23, 2021',
		link: '#'
		, file: "Flase"
	},{
		topic: 'Happy Thanksgiving!',
		date: 'November 25, 2021',
		link: '#'
		, file: "Flase"
	},{
		topic: 'Kalman Filtering 1',
		date: 'November 30, 2021',
		link: '#'
		, file: "Flase"
	},
	{
		topic: 'Kalman Filtering 2',
		date: 'December 2, 2021',
		link: '#'
		, file: "Flase"
	}
]
export default function LectureListSection() {
	return (
		<div className="flex flex-col mx-auto pb-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:pb-24">
			<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
					<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Date
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Topics
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Slides
									</th>
							</tr>
							</thead>
							<tbody>
								{lectures.map((lecture, lectureIdx) => (
									<tr key={lecture.topic} className={lectureIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lecture.date}</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lecture.topic}</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm">
											<a href={lecture.link} className="text-indigo-600 hover:text-indigo-900">
												{ lecture.file == "Flase" ? "#" : "Download" }
											</a>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}