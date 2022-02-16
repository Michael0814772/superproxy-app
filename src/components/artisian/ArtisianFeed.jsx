import React from 'react';
import rectangle from '../../assets/rectangle.png';
import markblack from '../../assets/markblack.png';
import location from '../../assets/location.png';
import staryellow from '../../assets/staryellow.png';
import starblack from '../../assets/starblack.png';
import chat from '../../assets/chat.png';
import coolicon from '../../assets/coolicon.png';

const ArtisianFeed = () => {
    return (
        <div>
            <div className='relative mt-12'>
                <div className='grid grid-cols-3 gap-2 mb-2 md:pr-6 md:pl-8'>
                    <div className='col-span-1'>
                        <img src={rectangle} alt="background" className='w-44 h-32 md:h-28' />
                    </div>
                    <div className='col-span-2'>
                        <div className='flex justify-between mb-1'>
                            <h1 className='font-medium text-btncolor text-btnmobile'>Michael Diego</h1>
                            <img src={staryellow} alt="yellowstar" className='border border-spanBorder rounded-full p-1 md:absolute md:-top-7 right-4' />
                        </div>
                        <p className='text-inputmobile text-bold mb-2'>Plumbing, Drainage management</p>
                        <p className='text-errormobile text-inputtext mb-3'>I am looking for a Co-Founder to join me visualize an idea to fruition. The Macro Idea is an Platform BYOB which sta...</p>
                        <p className='text-errormobile text-inputtext mb-1 md:absolute md:-top-6'>Hourly rate - $13</p>
                        <p className='text-errormobile md:absolute md:-top-6 right-12 bg-available px-1 w-fit'>Available 10 hours a week</p>
                    </div>
                </div>
                {/* <div className='grid grid-cols-5 gap-3'>
                </div> */}
                <div className='flex items-center gap-3 sm:gap-20 md:px-4 md:gap-10'>
                    <div className='pt-1'>
                        <div className='bg-navtext rounded-xl px-2 md:px-2 flex justify-center items-center pb-1'>
                            <img src={markblack} alt="mark" className='w-fit mr-1 pt-1' />
                            <p className='text-errormobile text-white'>verified</p>
                        </div>
                    </div>
                    <div className='flex w-fit h-fit pt-1'>
                        <img src={location} alt="location" className='h-3 mr-1' />
                        <p className='text-errormobile'>Hougang</p>
                    </div>
                    <div className='flex items-center pt-1'>
                        <img src={staryellow} alt="staryellow" />
                        <img src={staryellow} alt="staryellow" />
                        <img src={staryellow} alt="staryellow" />
                        <img src={staryellow} alt="staryellow" />
                        <img src={starblack} alt="starblack" className='mr-1' />
                        <p className='font-medium text-errormobile'>4</p>
                    </div>
                    <div className='flex items-center pt-1 ml-3'>
                        <img src={chat} alt="chat" className='mr-1' />
                        <p className='text-inputmobile text-btncolor'>Chat</p>
                    </div>
                    <div className='flex ml-3'>
                        <button className='text-inputmobile bg-btncolor rounded-lg px-3 py-1'>Invite</button>
                    </div>
                </div>

                <div className='absolute top-0 -left-1 md:left-4 md:-top-7'>
                    <p className='text-errormobile bg-btncolor rounded-tl-lg rounded-br-lg p-1'>Recommended</p>
                </div>
            </div>

            <div className='border-b border-spanBorder pb-4 mb-4 md:w-11/12 md:mx-auto' />

            <div className='relative mt-12'>
                <div className='grid grid-cols-3 gap-2 mb-2 md:pr-6 md:pl-8'>
                    <div className='col-span-1'>
                        <img src={rectangle} alt="background" className='w-44 h-32 md:h-28' />
                    </div>
                    <div className='col-span-2'>
                        <div className='flex justify-between mb-1'>
                            <h1 className='font-medium text-btncolor text-btnmobile'>Michael Diego</h1>
                            <img src={starblack} alt="blackstar" className='border border-spanBorder rounded-full p-1 md:absolute md:-top-7 right-4' />
                        </div>
                        <p className='text-inputmobile text-bold mb-2'>Plumbing, Drainage management</p>
                        <p className='text-errormobile text-inputtext mb-3'>I am looking for a Co-Founder to join me visualize an idea to fruition. The Macro Idea is an Platform BYOB which sta...</p>
                        <p className='text-errormobile text-inputtext mb-1 md:absolute md:-top-6'>Hourly rate - $13</p>
                        <p className='text-errormobile md:absolute md:-top-6 right-12 bg-available px-1 w-fit'>Available 10 hours a week</p>
                    </div>
                </div>
                {/* <div className='grid grid-cols-5 gap-3'>
                </div> */}
                <div className='flex items-center gap-3 sm:gap-20 md:px-4 md:gap-10'>
                    <div className='pt-1'>
                        <div className='bg-unverify rounded-xl px-2 md:px-2 flex justify-center items-center pb-1'>
                            <img src={coolicon} alt="mark" className='w-fit mr-1 pt-1' />
                            <p className='text-errormobile text-white'>Unverified</p>
                        </div>
                    </div>
                    <div className='flex w-fit h-fit pt-1'>
                        <img src={location} alt="location" className='h-3 mr-1' />
                        <p className='text-errormobile'>Hougang</p>
                    </div>
                    <div className='flex items-center pt-1'>
                        <img src={staryellow} alt="staryellow" />
                        <img src={staryellow} alt="staryellow" />
                        <img src={staryellow} alt="staryellow" />
                        <img src={starblack} alt="starblack" />
                        <img src={starblack} alt="starblack" className='mr-1' />
                        <p className='font-medium text-errormobile'>3</p>
                    </div>
                    <div className='flex items-center pt-1 ml-3'>
                        <img src={chat} alt="chat" className='mr-1' />
                        <p className='text-inputmobile text-btncolor'>Chat</p>
                    </div>
                    <div className='flex ml-3'>
                        <button className='text-inputmobile bg-btncolor rounded-lg px-3 py-1'>Invite</button>
                    </div>
                </div>

                <div className='absolute top-0 -left-1 md:left-4 md:-top-7'>
                    <p className='text-errormobile bg-btncolor rounded-tl-lg rounded-br-lg p-1'>Recommended</p>
                </div>
            </div>

            <div className='border-b border-spanBorder pb-4 mb-4 md:w-11/12 md:mx-auto' />

            <div className='relative mt-12'>
                <div className='grid grid-cols-3 gap-2 mb-2 md:pr-6 md:pl-8'>
                    <div className='col-span-1'>
                        <img src={rectangle} alt="background" className='w-44 h-32 md:h-28' />
                    </div>
                    <div className='col-span-2'>
                        <div className='flex justify-between mb-1'>
                            <h1 className='font-medium text-btncolor text-btnmobile'>Michael Diego</h1>
                            <img src={starblack} alt="blackstar" className='border border-spanBorder rounded-full p-1 md:absolute md:-top-7 right-4' />
                        </div>
                        <p className='text-inputmobile text-bold mb-2'>Plumbing, Drainage management</p>
                        <p className='text-errormobile text-inputtext mb-3'>I am looking for a Co-Founder to join me visualize an idea to fruition. The Macro Idea is an Platform BYOB which sta...</p>
                        <p className='text-errormobile text-inputtext mb-1 md:absolute md:-top-6'>Hourly rate - $13</p>
                        <p className='text-errormobile md:absolute md:-top-6 right-12 bg-available px-1 w-fit'>Available 10 hours a week</p>
                    </div>
                </div>
                {/* <div className='grid grid-cols-5 gap-3'>
                </div> */}
                <div className='flex items-center gap-3 sm:gap-16 md:px-4 md:gap-10'>
                    <div className='pt-1'>
                        <div className='bg-unverify rounded-xl px-2 md:px-2 flex justify-center items-center pb-1'>
                            <img src={coolicon} alt="mark" className='w-fit mr-1 pt-1' />
                            <p className='text-errormobile text-white'>Unverified</p>
                        </div>
                    </div>
                    <div className='flex w-fit h-fit pt-1'>
                        <img src={location} alt="location" className='h-3 mr-1' />
                        <p className='text-errormobile'>Hougang</p>
                    </div>
                    <div className='flex items-center pt-1'>
                        <img src={staryellow} alt="staryellow" />
                        <img src={staryellow} alt="staryellow" />
                        <img src={staryellow} alt="staryellow" />
                        <img src={starblack} alt="starblack" />
                        <img src={starblack} alt="starblack" className='mr-1' />
                        <p className='font-medium text-errormobile'>3</p>
                    </div>
                    <div className='flex items-center pt-1 ml-3 sm:ml-0'>
                        <img src={chat} alt="chat" className='mr-1' />
                        <p className='text-inputmobile text-btncolor'>Chat</p>
                    </div>
                    <div className='flex ml-3 sm:ml-0'>
                        <button className='text-inputmobile bg-btnharsh rounded-lg px-3 py-1 w-20'>Invite sent</button>
                    </div>
                </div>

                {/* <div className='absolute top-0 -left-1 md:left-4 md:-top-7'>
                    <p className='text-errormobile bg-btncolor rounded-tl-lg rounded-br-lg p-1'>Recommended</p>
                </div> */}
            </div>

            <div className='border-b border-spanBorder pb-4 mb-4 md:w-11/12 md:mx-auto' />

            <div className='relative mt-12'>
                <div className='grid grid-cols-3 gap-2 mb-2 md:pr-6 md:pl-8'>
                    <div className='col-span-1'>
                        <img src={rectangle} alt="background" className='w-44 h-32 md:h-28' />
                    </div>
                    <div className='col-span-2'>
                        <div className='flex justify-between mb-1'>
                            <h1 className='font-medium text-btncolor text-btnmobile'>Michael Diego</h1>
                            <img src={starblack} alt="blackstar" className='border border-spanBorder rounded-full p-1 md:absolute md:-top-7 right-4' />
                        </div>
                        <p className='text-inputmobile text-bold mb-2'>Plumbing, Drainage management</p>
                        <p className='text-errormobile text-inputtext mb-3'>I am looking for a Co-Founder to join me visualize an idea to fruition. The Macro Idea is an Platform BYOB which sta...</p>
                        <p className='text-errormobile text-inputtext mb-1 md:absolute md:-top-6'>Hourly rate - $13</p>
                        <p className='text-errormobile md:absolute md:-top-6 right-12 bg-available px-1 w-fit'>Available 10 hours a week</p>
                    </div>
                </div>
                {/* <div className='grid grid-cols-5 gap-3'>
                </div> */}
                <div className='flex items-center gap-3 sm:gap-16 md:px-4 md:gap-10'>
                    <div className='pt-1'>
                        <div className='bg-unverify rounded-xl px-2 md:px-2 flex justify-center items-center pb-1'>
                            <img src={coolicon} alt="mark" className='w-fit mr-1 pt-1' />
                            <p className='text-errormobile text-white'>Unverified</p>
                        </div>
                    </div>
                    <div className='flex w-fit h-fit pt-1'>
                        <img src={location} alt="location" className='h-3 mr-1' />
                        <p className='text-errormobile'>Hougang</p>
                    </div>
                    <div className='flex items-center pt-1'>
                        <img src={staryellow} alt="staryellow" />
                        <img src={staryellow} alt="staryellow" />
                        <img src={staryellow} alt="staryellow" />
                        <img src={starblack} alt="starblack" />
                        <img src={starblack} alt="starblack" className='mr-1' />
                        <p className='font-medium text-errormobile'>3</p>
                    </div>
                    <div className='flex items-center pt-1 ml-3 sm:ml-0'>
                        <img src={chat} alt="chat" className='mr-1' />
                        <p className='text-inputmobile text-btncolor'>Chat</p>
                    </div>
                    <div className='flex ml-3 sm:ml-0'>
                        <button className='text-inputmobile bg-btnharsh rounded-lg px-3 py-1 w-20'>Invite sent</button>
                    </div>
                </div>

                {/* <div className='absolute top-0 -left-1 md:left-4 md:-top-7'>
                    <p className='text-errormobile bg-btncolor rounded-tl-lg rounded-br-lg p-1'>Recommended</p>
                </div> */}
            </div>

            <div className='border-b border-spanBorder pb-4 mb-4 md:w-11/12 md:mx-auto' />

            <div className='relative mt-12'>
                <div className='grid grid-cols-3 gap-2 mb-2 md:pr-6 md:pl-8'>
                    <div className='col-span-1'>
                        <img src={rectangle} alt="background" className='w-44 h-32 md:h-28' />
                    </div>
                    <div className='col-span-2'>
                        <div className='flex justify-between mb-1'>
                            <h1 className='font-medium text-btncolor text-btnmobile'>Michael Diego</h1>
                            <img src={starblack} alt="blackstar" className='border border-spanBorder rounded-full p-1 md:absolute md:-top-7 right-4' />
                        </div>
                        <p className='text-inputmobile text-bold mb-2'>Plumbing, Drainage management</p>
                        <p className='text-errormobile text-inputtext mb-3'>I am looking for a Co-Founder to join me visualize an idea to fruition. The Macro Idea is an Platform BYOB which sta...</p>
                        <p className='text-errormobile text-inputtext mb-1 md:absolute md:-top-6'>Hourly rate - $13</p>
                        <p className='text-errormobile md:absolute md:-top-6 right-12 bg-available px-1 w-fit'>Available 10 hours a week</p>
                    </div>
                </div>
                {/* <div className='grid grid-cols-5 gap-3'>
                </div> */}
                <div className='flex items-center gap-3 sm:gap-16 md:px-4 md:gap-10'>
                    <div className='pt-1'>
                        <div className='bg-unverify rounded-xl px-2 md:px-2 flex justify-center items-center pb-1'>
                            <img src={coolicon} alt="mark" className='w-fit mr-1 pt-1' />
                            <p className='text-errormobile text-white'>Unverified</p>
                        </div>
                    </div>
                    <div className='flex w-fit h-fit pt-1'>
                        <img src={location} alt="location" className='h-3 mr-1' />
                        <p className='text-errormobile'>Hougang</p>
                    </div>
                    <div className='flex items-center pt-1'>
                        <img src={staryellow} alt="staryellow" />
                        <img src={staryellow} alt="staryellow" />
                        <img src={staryellow} alt="staryellow" />
                        <img src={starblack} alt="starblack" />
                        <img src={starblack} alt="starblack" className='mr-1' />
                        <p className='font-medium text-errormobile'>3</p>
                    </div>
                    <div className='flex items-center pt-1 ml-3 sm:ml-0'>
                        <img src={chat} alt="chat" className='mr-1' />
                        <p className='text-inputmobile text-btncolor'>Chat</p>
                    </div>
                    <div className='flex ml-3 sm:ml-0'>
                        <button className='text-inputmobile bg-btnharsh rounded-lg px-3 py-1 w-20'>Invite sent</button>
                    </div>
                </div>

                {/* <div className='absolute top-0 -left-1 md:left-4 md:-top-7'>
                    <p className='text-errormobile bg-btncolor rounded-tl-lg rounded-br-lg p-1'>Recommended</p>
                </div> */}
            </div>

            <div className='border-b border-spanBorder pb-4 mb-4 md:w-11/12 md:mx-auto' />

            <div className='relative mt-12'>
                <div className='grid grid-cols-3 gap-2 mb-2 md:pr-6 md:pl-8'>
                    <div className='col-span-1'>
                        <img src={rectangle} alt="background" className='w-44 h-32 md:h-28' />
                    </div>
                    <div className='col-span-2'>
                        <div className='flex justify-between mb-1'>
                            <h1 className='font-medium text-btncolor text-btnmobile'>Michael Diego</h1>
                            <img src={starblack} alt="blackstar" className='border border-spanBorder rounded-full p-1 md:absolute md:-top-7 right-4' />
                        </div>
                        <p className='text-inputmobile text-bold mb-2'>Plumbing, Drainage management</p>
                        <p className='text-errormobile text-inputtext mb-3'>I am looking for a Co-Founder to join me visualize an idea to fruition. The Macro Idea is an Platform BYOB which sta...</p>
                        <p className='text-errormobile text-inputtext mb-1 md:absolute md:-top-6'>Hourly rate - $13</p>
                        <p className='text-errormobile md:absolute md:-top-6 right-12 bg-available px-1 w-fit'>Available 10 hours a week</p>
                    </div>
                </div>
                {/* <div className='grid grid-cols-5 gap-3'>
                </div> */}
                <div className='flex items-center gap-3 sm:gap-16 md:px-4 md:gap-10'>
                    <div className='pt-1'>
                        <div className='bg-unverify rounded-xl px-2 md:px-2 flex justify-center items-center pb-1'>
                            <img src={coolicon} alt="mark" className='w-fit mr-1 pt-1' />
                            <p className='text-errormobile text-white'>Unverified</p>
                        </div>
                    </div>
                    <div className='flex w-fit h-fit pt-1'>
                        <img src={location} alt="location" className='h-3 mr-1' />
                        <p className='text-errormobile'>Hougang</p>
                    </div>
                    <div className='flex items-center pt-1'>
                        <img src={staryellow} alt="staryellow" />
                        <img src={staryellow} alt="staryellow" />
                        <img src={staryellow} alt="staryellow" />
                        <img src={starblack} alt="starblack" />
                        <img src={starblack} alt="starblack" className='mr-1' />
                        <p className='font-medium text-errormobile'>3</p>
                    </div>
                    <div className='flex items-center pt-1 ml-3 sm:ml-0'>
                        <img src={chat} alt="chat" className='mr-1' />
                        <p className='text-inputmobile text-btncolor'>Chat</p>
                    </div>
                    <div className='flex ml-3 sm:ml-0'>
                        <button className='text-inputmobile bg-btnharsh rounded-lg px-3 py-1 w-20'>Invite sent</button>
                    </div>
                </div>

                {/* <div className='absolute top-0 -left-1 md:left-4 md:-top-7'>
                    <p className='text-errormobile bg-btncolor rounded-tl-lg rounded-br-lg p-1'>Recommended</p>
                </div> */}
            </div>

            <div className='border-b border-spanBorder pb-4 mb-4 md:w-11/12 md:mx-auto' />

            <div className='relative mt-12'>
                <div className='grid grid-cols-3 gap-2 mb-2 md:pr-6 md:pl-8'>
                    <div className='col-span-1'>
                        <img src={rectangle} alt="background" className='w-44 h-32 md:h-28' />
                    </div>
                    <div className='col-span-2'>
                        <div className='flex justify-between mb-1'>
                            <h1 className='font-medium text-btncolor text-btnmobile'>Michael Diego</h1>
                            <img src={starblack} alt="blackstar" className='border border-spanBorder rounded-full p-1 md:absolute md:-top-7 right-4' />
                        </div>
                        <p className='text-inputmobile text-bold mb-2'>Plumbing, Drainage management</p>
                        <p className='text-errormobile text-inputtext mb-3'>I am looking for a Co-Founder to join me visualize an idea to fruition. The Macro Idea is an Platform BYOB which sta...</p>
                        <p className='text-errormobile text-inputtext mb-1 md:absolute md:-top-6'>Hourly rate - $13</p>
                        <p className='text-errormobile md:absolute md:-top-6 right-12 bg-available px-1 w-fit'>Available 10 hours a week</p>
                    </div>
                </div>
                {/* <div className='grid grid-cols-5 gap-3'>
                </div> */}
                <div className='flex items-center gap-3 sm:gap-16 md:px-4 md:gap-10'>
                    <div className='pt-1'>
                        <div className='bg-unverify rounded-xl px-2 md:px-2 flex justify-center items-center pb-1'>
                            <img src={coolicon} alt="mark" className='w-fit mr-1 pt-1' />
                            <p className='text-errormobile text-white'>Unverified</p>
                        </div>
                    </div>
                    <div className='flex w-fit h-fit pt-1'>
                        <img src={location} alt="location" className='h-3 mr-1' />
                        <p className='text-errormobile'>Hougang</p>
                    </div>
                    <div className='flex items-center pt-1'>
                        <img src={staryellow} alt="staryellow" />
                        <img src={staryellow} alt="staryellow" />
                        <img src={staryellow} alt="staryellow" />
                        <img src={starblack} alt="starblack" />
                        <img src={starblack} alt="starblack" className='mr-1' />
                        <p className='font-medium text-errormobile'>3</p>
                    </div>
                    <div className='flex items-center pt-1 ml-3 sm:ml-0'>
                        <img src={chat} alt="chat" className='mr-1' />
                        <p className='text-inputmobile text-btncolor'>Chat</p>
                    </div>
                    <div className='flex ml-3 sm:ml-0'>
                        <button className='text-inputmobile bg-btnharsh rounded-lg px-3 py-1 w-20'>Invite sent</button>
                    </div>
                </div>

                {/* <div className='absolute top-0 -left-1 md:left-4 md:-top-7'>
                    <p className='text-errormobile bg-btncolor rounded-tl-lg rounded-br-lg p-1'>Recommended</p>
                </div> */}
            </div>

            <div className='border-b border-spanBorder pb-4 mb-4 md:w-11/12 md:mx-auto' />

            <div className='flex justify-center mb-14 mt-14'>
                <button className='border border-spanBorder rounded-xl py-2 px-4 text-inputmobile'>Load more</button>
            </div>

        </div>
    )
}

export default ArtisianFeed