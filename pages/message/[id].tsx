import React, { useEffect, useRef, useState } from 'react'
import { AppLayout } from '../../layouts'
import Plyr, { APITypes } from "plyr-react";
import moment from 'moment';
import { RiPlayLine, RiRadio2Line, RiTv2Line } from 'react-icons/ri';
import { useRouter } from 'next/router';
import { useGetAllMessageQuery, useGetSingleMessageQuery, useLazyGetAllMessageQuery } from '../../services/message';
import { BeatLoader } from 'react-spinners';
import { IMessage } from '../../lib';

const videoId = "BWOIuNK6yRo";
const provider = "youtube";
const videoOptions = undefined;

const message = {
  id: 3,
  title: 'UNDERSTANDING THE TIMES WITH REVEREND P.N UTOMI',
  date: '2020-01-01',
  type: 'TGP',
  image: '/images/1.jpg',
  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, perferendis! Fugit, maxime corrupti. Commodi assumenda nihil similique ipsum tenetur molestiae ab minus, magni eveniet sit asperiores ducimus eaque impedit eos.  '
}

const messages = [
  {
    id: 1,
    title: 'PRAYER AND EMPOWERMENT MEETING WITH REVEREND P.N UTOMI',
    date: '2021-12-23',
    type: 'PEM',
    image: '/images/1.jpg',
  },
  {
    id: 2,
    title: '8 Benefits Of Spiritual Growth with REV P.N Utomi',
    date: '2022-08-08',
    type: 'NCR',
    image: '/images/1.jpg',
  },
  {
    id: 3,
    title: 'UNDERSTANDING THE TIMES WITH REVEREND P.N UTOMI',
    date: '2020-01-01',
    type: 'TGP',
    image: '/images/1.jpg',
  },
]


const MessagePage = () => {
  const ref = useRef<APITypes>(null);
  const router = useRouter()
  const [getRelated] = useLazyGetAllMessageQuery()
  const [videoId, setVideoId] = useState('')
  const [relatedMessages, setRelatedMessages] = useState<Array<IMessage>>([])
  const id = router.query.id as string

  const { data, isLoading, isError } = useGetSingleMessageQuery({ id: id },
    {
      refetchOnMountOrArgChange: true

    }
  )

  console.log(data);
  

  const getAllRelated = async (tag: any) => {
    try {
      const {data, isError, isLoading} = await getRelated({
        tag: tag,
        page: 1,
        search: '',

      })

      if(!isError && !isLoading && data?.data){
         setRelatedMessages(data.data.items)
      }

     

      console.log(data)


    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {

    if (!isLoading && !isError && data) {
      setVideoId(data.data.videoUrl)
      getAllRelated(data?.data.tag)
    }
  }, [isLoading, data])



  // const { data, isLoading, isFetching, isError } = useGetAllMessageQuery(
  //   {
  //     page: 1,
  //     search: '',
  //     tag: messageData?.data.tag
  //   }, 
  //   {
  //   refetchOnMountOrArgChange: true,
  // }
  // )

  const enterVideo = () => {
    (ref.current?.plyr as Plyr)?.fullscreen.enter();
  };

  const plyrVideo =
    videoId && provider ? (
      <Plyr
        ref={ref}
        source={{
          type: "video",
          sources: [
            {
              src: videoId,
              provider: provider
            }
          ]
        }}
        options={videoOptions}
      />
    ) : null;

  return (
    <AppLayout>

      {
        isError ? <p>Error Loading</p> : isLoading ? <BeatLoader /> : (
          <div>
            <div className='pt-20 xl:pt-0'>
              {/* {plyrVideo} */}
            </div>
            <div className='p-10'>
              <div className='flex items-center mb-4'>
                <button className='border rounded-md flex items-center px-3 py-1 mr-2'>
                  <RiRadio2Line className='mr-2' />
                  Download
                </button>
                <button className='border rounded-md flex items-center px-3 py-1'>
                  <RiTv2Line className='mr-2' />
                  Download
                </button>
              </div>
              <p>{data?.data.title} - {data?.data.tag}</p>
              <p className='text-sm text-gray-400 mb-4'>{moment(data?.data.createDateTime).format('Do MMM YY')}</p>
              <p className='mb-4'>{data?.data.description}</p>
              <hr />

              <h4 className=' mt-6 text-center mb-6 text-2xl tracking-tight font-extrabold  sm:text-3xl md:text-5xl' >Related Messages</h4>
              <div className='grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                {
                  relatedMessages

                    .map((message, idx) => (
                      <div className='bg-white p-4 dark:bg-slate-900 shadow-2xl dark:border border-primary rounded-lg  flex'>
                        <div className='bg-[url("/images/1.jpg")] w-4/12 min-h-[120px] bg-center relative bg-cover rounded-lg p-3 mr-3'>
                          <span className='bg-pink-400 py-[5px] px-2 rounded-lg text-[10px] text-white' >{message.tag}</span>
                          <div className='absolute -right-5 top-2/4'>
                            <div className='p-2 cursor-pointer hover:bg-secondary transition-all duration-300 rounded-full bg-primary -translate-y-2/4'>
                              <RiPlayLine color='white' size={30} />
                            </div>

                          </div>
                        </div>


                        <div className='flex flex-col w-8/12'>
                          <p>{message.title}</p>
                          <div className='flex mt-auto w-full justify-between items-center'>
                            <p className='text-gray-400 text-sm'>{moment(message.date).format('Do MMM YY')}</p>
                            <button onClick={() => router.push(`/message/${message.id}`)} className='py-[5px] px-3 rounded-lg text-[14px] bg-primary text-white'  >
                              view
                            </button>
                          </div>
                        </div>


                      </div>
                    ))
                }


              </div>
            </div>
          </div>
        )
      }




    </AppLayout>
  )
}

export default MessagePage