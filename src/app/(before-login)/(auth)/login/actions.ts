'use server'

import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  try {
    const data = {
      username: formData.get('email') as string,
      password: formData.get('password') as string,
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    console.log(res)
    return res.json();
  } catch (error) {
    console.log(error)
    if(error){
      redirect('error');
    }
    return error
  }
}
