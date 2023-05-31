const Project = ({ item }) => {
  return (
    <a href={`${item.link}`} key={item.id} className='flex flex-col items-center text-center  rounded-lg p-4 shadow-lg transition duration-300 hover:shadow-xl '>
      <div className='mb-4'>
        <img className='rounded-lg ' src={item.image} alt='' />
      </div>
      <p className='uppercase text-accent text-sm mb-2'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-2'>{item.name}</h3>
      <div className='text-base max-w-md'>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2'>{item.language}</span>
        {item.name === 'smartdelivery' ? <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>Project_Fin_D'etude</span> : null}
      </div>
    </a>
  );
};

export default Project;