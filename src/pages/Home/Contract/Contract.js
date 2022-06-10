import React from 'react';

const Contract = () => {
    const handleContract=event=>{
        event.preventDefault()
    }
    return (
        <div className='lg:px-32 grid justify-center mb-20 px-8' id='contrac'>
            <form onClick={handleContract}>
            <input type="text" placeholder="Name" className="mb-5 input input-bordered input-primary w-full max-w-xs" /><br />
            <input type="email" placeholder="Email" className="mb-5 input input-bordered input-primary w-full max-w-xs" /><br />
            <textarea className='mb-5 input input-bordered input-primary w-full max-w-xs' placeholder='Message' name="message" id="" cols="30" rows="10"></textarea>
            <input type="submit" className='btn btn-primary hover:bg-white hover:text-primary' value="Submit Message" />
            </form>
        </div>
    );
};

export default Contract;