import Link from 'next/link';

export const Brand = () => {
    return (
        <div className='flex items-center justify-between px-3'>
            <Link href='/' className='text-lg' style={{ fontFamily: 'Apple Garamond' }}>
                NotasAI Chat
            </Link>
        </div>
    );
};
