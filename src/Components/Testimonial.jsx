const Testimonial = () => {
  return (
    <section className="my-20 grid gap-10">
      <div className="badge badge-outline text-lg px-4 py-4">Testimonial</div>
      <h1 className="text-4xl font-semibold">What they say about us</h1>
      {/* testimonials */}
      <div className="grid grid-cols-3">
        <div className="card bg-[#FFFFF5] w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">
              Expertise and Compassion <br /> Combined
            </h2>
            <p className="opacity-70">
              I can't thank enough for their exceptional care. The doctors and
              staff showed incredible expertise and compassion throughout my
              treatment journey. I felt truly cared for every step of the way.
            </p>
            <div className="card-actions">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div>
                <div className="font-bold">
                  Sarah D,{" "}
                  <span className="text-sm opacity-50">IT Professional</span>
                </div>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-[#FFFFF5] w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">
              Life-Saving Care,Life-Changing <br /> Experience
            </h2>
            <p className="opacity-70">
              My experience at [Healthcare Provider Name] was life-changing. The
              prompt and accurate diagnosis, coupled with the advanced
              treatments they provided, saved my life.
            </p>
            <div className="card-actions">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div>
                <div className="font-bold">
                  Michael R,{" "}
                  <span className="text-sm opacity-50">Business Executive</span>
                </div>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400 rating-hidden"
                    defaultChecked
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-[#FFFFF5] w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">
              A Partner in Health and <br />
              Wellness
            </h2>
            <p className="opacity-70">
              As a busy professional, I appreciate the convenience and quality
              of care I receive at [Healthcare Provider Name]. From telemedicine
              consultations to routine check-ups, they've become my trusted
              partner in health and
            </p>
            <div className="card-actions">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div>
                <div className="font-bold">
                  David S, <span className="text-sm opacity-50">Lawyer</span>
                </div>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
