'use server'

import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    console.log("보내는 데이터", email, password);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login/local`, {
    // const res = await fetch(`http://localhost:3000/test/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    console.log(res)
  } catch (error) {
    console.log(error)
      redirect('error');
  }
}