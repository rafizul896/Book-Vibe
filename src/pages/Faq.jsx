const Faq = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                <div className="mt-4 mb-8 dark:text-gray-600">
                    <h3 className="text-xl font-bold text-black py-3">Dear Sir/Madam,</h3>
                    <p>
                        Frequently Asked Questions (FAQ) is always a great place to quickly get some common questions answered. Hopefully, here you may get most of your questions answered. However, we understand that you are special. These FAQs may not answer your questions. Then visit the help center. Drop us a few lines at the contact page. Stay close.
                    </p>
                </div>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">When can I get books after lockdown?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">We have our delivery on lockdown. We are delivering the books in our stock within 2-5 working days. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What is the special discount available to a particular book?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">We always sell books at the maximum discount possible and we don’t make hefty profit on some items to provide lucrative discount on a few books to lure buyers. We believe that everyone deserves the respect of most favorite buyer and patron.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What is the benefit of ordering from website over ordering from Facebook?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Ordering online directly from website is safer than ordering from Facebook. Because Facebooks privacy policy govern your information confidentiality. We have control over data on our website. Whereas, there are alleged instances of data theft an breach of privacy from Facebook. If you order from eboighar.com website, you are protected by our privacy policy.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How long does it take to get my books’ delivery?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">The estimated time of delivery is 1-3 working days for regular shipping (Dhaka) and 2-5 working days for regular shipping (Outside Dhaka)</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How to make complaint over an order?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">You can report any kind of complaint to our call center. Call center number 0199999999, 01800000000, you can also mail us (email-info@123.com)</p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Faq;