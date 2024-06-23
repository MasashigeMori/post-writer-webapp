import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function IndexPage() {
    return (
        <>
            <section className='pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12'>
                <div className='container text-center flex flex-col items-center gap-4 max-w-[64rem]'>
                    <Link 
                        href={siteConfig.links.x} 
                        className='bg-muted px-4 py-1.5 roouded-2xl font-medium text-sm'                            
                        target="_blank"
                        rel="noreferrer"
                    >
                        Xをフォローする
                    </Link>
                    <h1 className='text-3xl font-extrabold sm:text-5xl md-6xl lg:text-7xl'>PostWriter</h1>
                    <p className='text-muted-foreground sm:text-xl leading-normal max-w-[42rem]'>
                      このアプリケーションは<b>Next.js AppRouter</b>で作成しております。ユーザは自由に投稿をポストすることができます。
                    </p>
                    <div className="space-x-4">
                        <Link
                            href={"/login"}
                            className={cn(buttonVariants({ size: "lg" }))}
                        >
                            はじめる
                        </Link>
                        <Link
                            href={siteConfig.links.github}
                            className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </Link>
                    </div>
                </div>
            </section>
            <section id="furures" className="container py-8 md:py-12 lg:py-24 bg-slate-100 space-y-6">
              <div className="text-center space-y-6 max-w-[58rem] mx-auto">
                <h2 className="font-extrabold text-3xl md:text-6xl">サービスの特徴</h2>
                <p className="text-muted-foreground sm:text-lg sm:leading-7">
                  このプロジェクトはモダンは技術スタックを使って作られたWebアプリケーションです。Next.js AppRouterやcontentLayerを利用してマークダウン形式でブログ投稿ができます。
                </p>
              </div>
              <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[64rem]">
                <div className="bg-background border p-2 rouded-lg">
                  <div className="flex flex-col justify-between p-6 md:h-[160px] h-[180px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 15 15">
      <path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 11.697 6.216L4.907 4.21A.5.5 0 0 0 4 4.5V12h1V6.06l5.83 8.162A7.5 7.5 0 0 1 0 7.5ZM10 10V4h1v6h-1Z" clip-rule="evenodd"/>
                    </svg>
                  <div className="space-y-2">
                    <h3 className="font-bold">Next.js</h3>
                    <p className="text-sm text-muted-foreground">AppRouter/Layout/APIRouterの技術を使用</p>
                  </div>
                  </div>
                </div>
                <div className="bg-background border p-2 rouded-lg">
                  <div className="flex flex-col justify-between p-6 md:h-[160px] h-[180px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
    <path fill="currentColor" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236a2.236 2.236 0 0 1-2.236-2.236a2.236 2.236 0 0 1 2.235-2.236a2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622c-1.78-1.653-3.542-2.602-4.887-2.602c-.41 0-.783.093-1.106.278c-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03c-.704 3.113-.39 5.588.988 6.38c.32.187.69.275 1.102.275c1.345 0 3.107-.96 4.888-2.624c1.78 1.654 3.542 2.603 4.887 2.603c.41 0 .783-.09 1.106-.275c1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032c.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127c.666.382.955 1.835.73 3.704c-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28c-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538a15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707c.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564c-.44-.02-.89-.034-1.345-.034c-.46 0-.915.01-1.36.034c.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093c.406.582.802 1.203 1.183 1.86c.372.64.71 1.29 1.018 1.946c-.308.655-.646 1.31-1.013 1.95c-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005a26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16c-.225.39-.435.782-.635 1.174c-.265-.656-.49-1.31-.676-1.947c.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387c-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498c1.732.74 2.852 1.708 2.852 2.476c-.005.768-1.125 1.74-2.857 2.475c-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5c-1.732-.737-2.852-1.706-2.852-2.474c0-.768 1.12-1.742 2.852-2.476c.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948c-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175c.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423c.23 1.868-.054 3.32-.714 3.708c-.147.09-.338.128-.563.128c-1.012 0-2.514-.807-4.11-2.28c.686-.72 1.37-1.536 2.02-2.44c1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532c.66.905 1.345 1.727 2.035 2.446c-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703c.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034c.46 0 .915-.01 1.36-.034c-.44.572-.895 1.095-1.345 1.565c-.455-.47-.91-.993-1.36-1.565z"/>
</svg>
                  <div className="space-y-2">
                    <h3 className="font-bold">React</h3>
                    <p className="text-sm text-muted-foreground">AppRouter/Layout/APIRouterの技術を使用</p>
                  </div>
                  </div>
                </div>
                <div className="bg-background border p-2 rouded-lg">
                  <div className="flex flex-col justify-between p-6 md:h-[160px] h-[180px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12Z"/>
</svg>
                  <div className="space-y-2">
                    <h3 className="font-bold">Tailwind CSS</h3>
                    <p className="text-sm text-muted-foreground">AppRouter/Layout/APIRouterの技術を使用</p>
                  </div>
                  </div>
                </div>
                <div className="bg-background border p-2 rouded-lg">
                  <div className="flex flex-col justify-between p-6 md:h-[160px] h-[180px]">
                    <img src="stripe.png" alt="Stripe Image"  width="45" height="45" viewBox="0 0 24 24"/>
                  <div className="space-y-2">
                    <h3 className="font-bold">Stripe</h3>
                    <p className="text-sm text-muted-foreground">AppRouter/Layout/APIRouterの技術を使用</p>
                  </div>
                  </div>
                </div>
                <div className="bg-background border p-2 rouded-lg">
                  <div className="flex flex-col justify-between p-6 md:h-[160px] h-[180px]">
                    <img src="authentication.png" alt="authentication.png"  width="45" height="45" viewBox="0 0 24 24" />
                  <div className="space-y-2">
                    <h3 className="font-bold">Authentication</h3>
                    <p className="text-sm text-muted-foreground">AppRouter/Layout/APIRouterの技術を使用</p>
                  </div>
                  </div>
                </div>
                <div className="bg-background border p-2 rouded-lg">
                  <div className="flex flex-col justify-between p-6 md:h-[160px] h-[180px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
        <path d="M2.5 12.89H7l3-5l4 9l3-5h4.43"/>
        <path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"/>
    </g>
</svg>
                  <div className="space-y-2">
                    <h3 className="font-bold">PlanetScale</h3>
                    <p className="text-sm text-muted-foreground">AppRouter/Layout/APIRouterの技術を使用</p>
                  </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto md:max-w-[58rem] text-center">
                  <p className="text-muted-foreground sm:text-lg sm:leading-7">PostWriterはログインするとブログ投稿ができるようになります。</p>
              </div>
            </section>
            <section id='contact' className="container py-8 md:py-12 lg:py-24">
              <div className="max-w-[58rem] mx-auto text-center flex-col gap-4">
                <h2 className="font-extrabold text-3xl md:text-6xl">Contact Me</h2>
                <p className="text-muted-foreground sm:text-lg sm:leading-7">もしもWebサービスが気に入った場合は下記XからDMで連絡ください
                <br />
                お仕事のご連絡お待ちしております。
                </p>
                <Link href={siteConfig.links.x} className="underline underline-offset-4" target="_blank" rel="noreferrer">お仕事はXまで</Link>
              </div>
            </section>
        </>
    )
}
