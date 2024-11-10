import { Button } from "./Button"

export const FormTemp = () => {
    return (
        <>
            <div id="FormTemp">
                <div className="flex justify-evenly">
                    <div className="space-y-12">
                        <form id="textForm">
                            <h2 className="font-semibold white text-4xl">Personal Information</h2>
                            <div className="border-b border-gray-900/10 pb-12">
                                <label className="text-base/7 font-semibold white">Name</label>
                                <div className="my-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input type="text" name="nameForm" id="nameForm" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 white placeholder:text-gray-200 focus:ring-0 sm:text-sm/6" placeholder="Enter your name" required/>
                                    </div>
                                </div>

                                <label className="text-base/7 font-semibold white">Contact</label>
                                <div className="my-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input type="number" name="contactForm" id="contactForm" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 white placeholder:text-gray-200 focus:ring-0 sm:text-sm/6" placeholder="Enter your contact number" required/>
                                    </div>
                                </div>

                                <label className="text-base/7 font-semibold white">Email</label>
                                <div className="my-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input type="email" name="emailForm" id="emailForm" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 white placeholder:text-gray-200 focus:ring-0 sm:text-sm/6" placeholder="Enter your email address" required/>
                                    </div>
                                </div>

                                <label className="text-base/7 font-semibold white">About Me</label>
                                <div className="my-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <textarea name="aboutForm" id="aboutForm" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 white placeholder:text-gray-200 focus:ring-0 sm:text-sm/6" placeholder="Enter text here" rows={4} cols={900} required/>
                                    </div>
                                </div>

                                <label className="text-base/7 font-semibold white">Designation / Job Title</label>
                                <div className="my-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input type="text" name="desigForm" id="desigForm" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 white placeholder:text-gray-200 focus:ring-0 sm:text-sm/6" placeholder="Enter Job Title" required/>
                                    </div>
                                </div>


                                <label className="mt-6">Important Links</label>

                                <label className="text-base/7 font-semibold white">Facebook</label>
                                <div className="my-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input type="text" name="fblink" id="fbLinkForm" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 white placeholder:text-gray-200 focus:ring-0 sm:text-sm/6" placeholder="Paste your link here" required/>
                                    </div>
                                </div>

                                <label className="text-base/7 font-semibold white">GitHub</label>
                                <div className="my-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input type="text" name="gitLinkForm" id="gitLinkForm" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 white placeholder:text-gray-200 focus:ring-0 sm:text-sm/6" placeholder="Paste your link here" required/>
                                    </div>
                                </div>

                                <label className="text-base/7 font-semibold white">LinkedIn</label>
                                <div className="my-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input type="text" name="linkedLink" id="linkedLink" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 white placeholder:text-gray-200 focus:ring-0 sm:text-sm/6" placeholder="Paste your link here" required/>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>


                    {/* Right-Sec */}
                    <div>
                        <h2 className="font-semibold white text-4xl">Professional Information</h2>
                        <form>
                            <div className="border-b border-gray-900/10 pb-12">
                                <label className="text-base/7 font-semibold white">Objectives</label>
                                <div className="my-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <textarea name="objForm" id="objForm" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 white placeholder:text-gray-200 focus:ring-0 sm:text-sm/6" placeholder="Enter your objectives here" rows={3} cols={900} required/>
                                    </div>
                                </div>

                                <label className="text-base/7 font-semibold white">Work Experience</label>
                                <div className="my-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <textarea name="expForm" id="expForm" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 white placeholder:text-gray-200 focus:ring-0 sm:text-sm/6" placeholder='Enter comma "," seperated values' rows={3} cols={900} required/>
                                    </div>
                                </div>

                                <label className="text-base/7 font-semibold white">Qualification</label>
                                <div className="my-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <textarea name="QualForm" id="QualForm" className="list-disc block flex-1 border-0 bg-transparent py-1.5 pl-1 white placeholder:text-gray-200 focus:ring-0 sm:text-sm/6" placeholder='Enter comma "," seperated values' rows={3} cols={900} required/>
                                    </div>
                                </div>

                                <label className="text-base/7 font-semibold white">Skills</label>
                                <div className="my-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <textarea name="skillForm" id="skillForm" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 white placeholder:text-gray-200 focus:ring-0 sm:text-sm/6" placeholder='Enter comma "," seperated values' rows={3} cols={900} required/>
                                    </div>
                                </div>

                                <label className="text-base/7 font-semibold white">Certification</label>
                                <div className="my-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <textarea name="certForm" id="certForm" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 white placeholder:text-gray-200 focus:ring-0 sm:text-sm/6" placeholder='Enter comma "," seperated values' rows={2} cols={900} required/>
                                    </div>
                                </div>

                                <label className="text-base/7 font-semibold white">Upload your Image</label>
                                <div className="my-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input type="file" name="imageForm" id="imageForm" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 white placeholder:text-gray-200 focus:ring-0 sm:text-sm/6" required/>
                                    </div>
                                </div>

                            </div>
                        </form >
                    </div>
                </div >
            </div>
                <Button />
        </>
    )
}
