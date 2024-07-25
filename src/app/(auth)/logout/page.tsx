import { cookies } from 'next/headers'


export default function Page(){

  return (
    <div onClick={async () => {
      await deleteCookie('cookieName', { path: '/' }); // 필요한 인자를 제공하세요
    }}>
      <h1>로그아웃 되었습니다.</h1>
    </div>
  )
}