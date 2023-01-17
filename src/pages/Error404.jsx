import { error404 } from "../assests"

const Error404 = () => {
  return (
    <div className='error-page'>
        <div className='error-container container max-w-full mx-auto px-4'>
            <div className='error-wrapper'>
                <img src={error404} alt="Error 404" loading="lazy" className="mx-auto max-w-xs md:max-w-sm"/>
                <div className="error-text">
                    <p className="text-3xl my-4 text-slate-600 dark:text-slate-400 font-[500] text-center">Oops, looks like the page is lost.</p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Error404