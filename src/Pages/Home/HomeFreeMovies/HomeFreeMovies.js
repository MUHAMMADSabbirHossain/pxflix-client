import React from 'react';

const HomeFreeMovies = () => {
    return (
        <div className='min-h-dvh'>

            {/* section title */}
            <h2 className='text-3xl text-white py-12'>FREE MOVIES</h2>

            {/* section cards */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>

                <div className="mx-auto card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeFreeMovies;