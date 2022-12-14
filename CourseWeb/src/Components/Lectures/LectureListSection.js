const lectures = [
	{
		topic: 'Introduction',
		date: 'August 30, 2022',
		link: '/ppt/Lecture1_Introduction.pdf'
	}, 
	{
		topic: 'Linear Algebra 1',
		date: 'September 1, 2022',
		link: '/ppt/Lecture2_LinearAlgebra1.pdf'
	},
	{
		topic: 'Linear Algebra 2',
		date: 'September 6, 2022',
		link: '/ppt/Lecture3_LinearAlgebra2.pdf'
	},{
		topic: 'Optimization',
		date: 'September 8, 2022',
		link: '/ppt/Lecture4_Optimization.pdf'
	},{
		topic: 'Deterministic Representations',
		date: 'September 13, 2022',
		link: '/ppt/Lecture5_DeterministicRepresentations.pdf'
	},{
		topic: 'Data-Driven Representations',
		date: 'September 15, 2022',
		link: '/ppt/Lecture6_EigenRepresentations.pdf'
	},{
		topic: 'Classification and Metaclassifiers',
		date: 'September 20, 2022',
		link: '/ppt/Lecture7_BoostingandFacedetectionCMU.pdf'
	},{
		topic: 'Face Detection',
		date: 'September 22, 2022',
		link: '/ppt/Lecture8_Facedetection.pdf'
	},
	{
		topic: 'Non-Negative Matrix Factorization',
		date: 'September 27, 2022',
		link: '/ppt/Lecture9_NonNegativeMatrixFactorization.pdf'
	},{
		topic: 'Probability and Information Theory',
		date: 'September 29, 2022',
		link: '/ppt/Lecture10_Probability&InformationTheory.pdf'
	},{
		topic: 'Independent Component Analysis',
		date: 'October 4, 2022',
		link: '/ppt/Lecture11_ICA.pdf'
	},{
		topic: 'Clustering',
		date: 'October 6, 2022',
		link: '/ppt/Lecture12_Clustering.pdf'
	},{
		topic: 'Dictionary Representations',
		date: 'October 11, 2022',
		link: '/ppt/Lecture13_SparseOvercomplete.pdf'
	},{
		topic: 'Guest Lecture: Compressive Sensing',
		date: 'October 13, 2022',
		link: '/ppt/Lecture14_CompressiveSensing.pptx'
	},{
		topic: 'Happy break!',
		date: 'October 18, 2022',
		link: '#'
	},{
		topic: 'Happy break!',
		date: 'October 20, 2022',
		link: '#'
	},{
		topic: 'Regression and Prediction',
		date: 'October 25, 2022',
		link: '/ppt/Lecture15_Regression&Prediction.pdf'
	},{
		topic: 'Time Series Predication',
		date: 'October 27, 2022',
		link: '/ppt/Lecture16_TimeSeriesPredication.pptx'
	},{
		topic: 'Linear Classifiers',
		date: 'November 1, 2022',
		link: '/ppt/Lecture17_SVM.pdf'
	},{
		topic: 'Expectation Maximization 1',
		date: 'November 8, 2022',
		link: '/ppt/Lecture18_EM1.pdf'
	},{
		topic: 'Expectation Maximization 2',
		date: 'November 10, 2022',
		link: '/ppt/Lecture19_EM2.pdf'
	},{
		topic: 'Factor Analysis',
		date: 'November 15, 2022',
		link: '/ppt/Lecture20_FA.pdf'
	},{
		topic: 'Hidden Markov Models 1',
		date: 'November 17, 2022',
		link: '/ppt/Lecture21_HMM1.pdf'
	},{
		topic: 'Hidden Markov Models 2',
		date: 'November 22, 2022',
		link: '/ppt/Lecture22_HMM2.pdf'
	},{
		topic: 'Happy Thanksgiving!',
		date: 'November 24, 2022',
		link: '#'
	},{
		topic: 'Supervised Representations',
		date: 'November 29, 2022',
		link: '/ppt/Lecture23_CCA_LDA.pdf'
	},{
		topic: 'Kalman Filtering 1',
		date: 'December 1, 2022',
		link: '/ppt/Lecture24_KalmanFilter.pdf'
	},{
		topic: 'Kalman Filtering 2',
		date: 'December 6, 2022',
		link: '/ppt/Lecture25_KalmanFilter2.pdf'
	},{
		topic: 'Particle Filtering',
		date: 'December 8, 2022',
		link: '/ppt/Lecture26_KalmanFilter3.pdf'
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
												Download
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