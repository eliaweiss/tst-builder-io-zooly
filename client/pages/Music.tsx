export default function Music() {
  return (
    <div className="min-h-screen p-8 bg-surface">
      <div className="max-w-md mx-auto space-y-4">
        <h1 className="text-3xl font-bold mb-8">Music Player</h1>
        <MusicCard />
      </div>
    </div>
  );
}

function MusicCard() {
  return (
    <div 
      className="flex flex-col justify-center items-start rounded-lg"
      style={{ background: '#DCE2F9' }}
    >
      <div className="flex flex-col justify-center items-start gap-3 self-stretch rounded-2xl p-3 pl-3 pr-2">
        <div className="flex items-center self-stretch gap-0">
          <div className="flex items-start w-12">
            <div className="flex w-12 h-12 justify-center items-center flex-shrink-0">
              <div className="flex justify-center items-center rounded-full">
                <div className="flex p-2 justify-center items-center">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" 
                      fill="#44464F"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center" style={{ background: '#B0C6FF' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M8.33333 17.5C7.41667 17.5 6.63194 17.1736 5.97917 16.5208C5.32639 15.8681 5 15.0833 5 14.1667C5 13.25 5.32639 12.4653 5.97917 11.8125C6.63194 11.1597 7.41667 10.8333 8.33333 10.8333C8.65278 10.8333 8.94792 10.8715 9.21875 10.9479C9.48958 11.0243 9.75 11.1389 10 11.2917V2.5H15V5.83333H11.6667V14.1667C11.6667 15.0833 11.3403 15.8681 10.6875 16.5208C10.0347 17.1736 9.25 17.5 8.33333 17.5Z" 
                fill="#575E71"
              />
            </svg>
          </div>

          <div className="flex h-[42px] px-3 pl-3 pr-1.5 flex-col justify-center items-start flex-1">
            <div className="flex h-[42px] pt-[17px] flex-col justify-end items-start gap-0.5 flex-shrink-0 self-stretch">
              <div className="flex w-[138px] items-center gap-1">
                <div className="w-[22px] h-3 flex-shrink-0 relative">
                  <div 
                    className="w-[27px] h-[10px] flex-shrink-0 rounded-r-[30px] absolute -left-[3px] -top-[1px]"
                    style={{ background: '#465D91' }}
                  ></div>
                </div>
                <div className="h-3 flex-1 relative">
                  <div className="w-28 h-3 flex-shrink-0 absolute left-0 top-0">
                    <div 
                      className="w-28 h-1 flex-shrink-0 rounded-[2px] absolute left-0 top-1"
                      style={{ background: '#F1F0F7' }}
                    ></div>
                  </div>
                  <div className="w-1.5 h-2 flex-shrink-0 absolute left-[106px] top-0.5">
                    <div 
                      className="w-1 h-1 flex-shrink-0 rounded-[26px] absolute left-0.5 top-0.5"
                      style={{ background: '#575E71' }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center self-stretch">
                <div 
                  className="text-[11px] font-normal leading-4 tracking-[0.5px]"
                  style={{ color: '#1A1B20' }}
                >
                  1:02
                </div>
                <div 
                  className="text-[11px] font-normal leading-4 tracking-[0.5px]"
                  style={{ color: '#1A1B20' }}
                >
                  2:00
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start w-12">
            <div className="flex w-12 h-12 justify-center items-center flex-shrink-0">
              <div 
                className="flex w-8 flex-col justify-center items-center flex-shrink-0 rounded-full"
                style={{ background: '#465D91' }}
              >
                <div className="flex h-8 justify-center items-center self-stretch">
                  <div className="w-5 h-5 relative">
                    <svg 
                      width="10" 
                      height="12" 
                      viewBox="0 0 10 12" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-[5px] top-1"
                    >
                      <path 
                        d="M6.66667 11.6667V0H10V11.6667H6.66667ZM0 11.6667V0H3.33333V11.6667H0Z" 
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start w-12">
            <div className="flex w-12 h-12 justify-center items-center flex-shrink-0">
              <div className="flex w-10 flex-col justify-center items-center flex-shrink-0 rounded-full">
                <div className="flex h-10 justify-center items-center self-stretch">
                  <div className="w-6 h-6 relative">
                    <svg 
                      width="12" 
                      height="8" 
                      viewBox="0 0 12 8" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-1.5 top-2"
                    >
                      <path 
                        d="M6 7.4L0 1.4L1.4 0L6 4.6L10.6 0L12 1.4L6 7.4Z" 
                        fill="#1A1B20"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
