import { motion } from "framer-motion";
import {   CircleDashed, Circle  } from "lucide-react";



const OverviewCards = ({overviewData}) => {
	console.log("dss "+overviewData)
	return (
		<div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
			{overviewData.map((item, index) => (
				<motion.div
					key={item.name}
					className='bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg
            rounded-xl p-6 border border-gray-700
          '
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: index * 0.1 }}
				>
					<div className='flex items-center justify-between'>
						<div>
							<h3 className='text-sm font-medium text-gray-400'>{item.name}</h3>
							<p className='mt-1 text-xl font-semibold text-gray-100'>{item.value}</p>
						</div>

						<div
							className={`
              p-3 rounded-full bg-opacity-20 ${item.status == true ? "bg-green-500" : "bg-red-500"}
              `}
						>
							<item.icon className={`size-6  ${item.status == true ? "text-green-500" : "text-red-500"}`} />
						</div>
					</div>
					<div
						className={`
              mt-4 flex items-center ${item.status == true ? "text-green-500" : "text-red-500"}
            `}
					>
						{item.status == true ? <Circle size='19' className=""/> : <CircleDashed size='20' />}
						<span className='ml-1 text-sm font-medium'>{item.status==true ? "Online":"Offline"}</span>
						
					</div>
					<span className='ml-1 text-sm  mt-4 flex items-center text-slate-500 font-medium'>30 min ago</span> 
				</motion.div>
			))}
		</div>
	);
};
export default OverviewCards;
