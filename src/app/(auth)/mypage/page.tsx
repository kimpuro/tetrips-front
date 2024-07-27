
export default function Page(){

  return (
    <div onClick={async () => {
      await deleteCookie('cookieName', { path: '/' });
    }}>
      <h1>로그아웃 되었습니다.</h1>
    </div>
  )
}