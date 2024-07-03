const FAQ = () => {
  return (
    <section className="grid gap-10">
      <div className="badge badge-outline text-xl px-6 py-4"> Faq</div>
      <h1 className="text-5xl font-semibold">Frequently Asked Questions</h1>
      {/* accordion */}
      <div className="grid gap-3">
        {" "}
        <div className="collapse ">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium bg-[#FFFFF5] border-b-[1px]">
            What Are Your Office Hours?
          </div>
          <div className="collapse-content">
            <p className="opacity-70 px-2 py-3">
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow ">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">
            How Can I Schedule An Appointment
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow ">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">
            Do You Accept Insurance?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow ">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">
            What Should I Bring To My Appointment?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow ">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">
            Do You Offer Telemedicine Appointments
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
