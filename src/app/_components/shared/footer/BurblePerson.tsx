import Link from 'next/link';
import React from 'react';

interface Props {
	username: string;
	avatar: string;
	github: string;
}

export const BurblePerson = ({ avatar, username, github }: Props) => {
	return (
		<Link href={github}>
			<div className='-mr-5 inline-flex flex-col relative group cursor-pointer'>
				<img
					className='size-12 rounded-full border-2 border-gray-800'
					src={avatar}
					alt={username}
				/>

				<div className='absolute -top-12 -right-1/2 min-w-24 text-center bg-black text-white p-2 rounded-lg shadow-lg group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible invisible opacity-0 translate-y-14 transition-all duration-300'>
					<div className='absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-black rotate-180'></div>
					<span className='text-sm'>{username}</span>
				</div>
			</div>
		</Link>
	);
};
