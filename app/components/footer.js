import Image from 'next/image';

export default function Footer() {
    return (
        <footer className='px-7 py-5 text-left animate-revealprofiles'>
            <ul className='space-x-8 inline-flex items-center ml-4'>
                <li>
                    <a href="mailto:kelly.liu@yale.edu">
                        <Image src='/images/gmail-icon.svg' className='w-6' alt='Gmail' width="6" height="6"></Image>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/kliu3115">
                        <Image src='/images/github-icon.svg' className='w-6' alt='Github' width="6" height="6"></Image>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/kelly-liu-792235364/">
                        <Image src='/images/linkedin-icon.svg' className='w-6' alt='Linkedin' width="6" height="6"></Image>
                    </a>
                </li>
            </ul>
        </footer>
    );
}
