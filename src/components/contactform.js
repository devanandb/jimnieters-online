import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="">
            <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field" className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">

                <input type="hidden" name="bot-field" />

                <div className="mb-8">
                    <label className="block text-gray-700 dark:text-gray-200 text-lg font-medium mb-2" htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline" required/>
                </div>
                <div className="mb-8">
                    <label className="block text-gray-700 dark:text-gray-200 text-lg font-medium mb-2" htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline" required/>
                </div>
                <div className="mb-8">
                    <label className="block text-gray-700 dark:text-gray-200 text-lg font-medium mb-2" htmlFor="email">Relates to</label>
                    <div class="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 dark:text-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="reason[]" id="grid-state">
                            <option>Work with Jim</option>
                            <option>Website</option>
                            <option>Connnect</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-200">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
                <div className="mb-8">
                    <label className="block text-gray-700 dark:text-gray-200 text-lg font-medium mb-2"  htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="6" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <input  type="submit" value="Send Message" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
                    <input type="reset" value="Clear form" className="inline-block align-baseline font-medium text-base text-blue-500 dark:bg-gray-900 dark:text-blue-200 hover:text-blue-800" />
                </div>
            </form>
            {/* <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">information@untitled.tld</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>(000) 000-0000 x12387</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>1234 Somewhere Road #5432<br />
                        Nashville, TN 00000<br />
                        United States of America</span>
                    </div>
                </section>
            </section> */}
        </div>
    </section>
)

export default Contact