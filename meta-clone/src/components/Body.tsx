import styled from 'styled-components'
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { FaFacebook } from 'react-icons/fa'
import { HiUserGroup } from 'react-icons/hi'
import { AiTwotoneHome, AiFillFlag } from 'react-icons/ai'
import { BsCollectionPlayFill, BsFillBookmarkFill, BsFillCreditCard2BackFill, BsFillBarChartFill, BsMessenger } from 'react-icons/bs'
import { FcClock } from 'react-icons/fc'
import { HiSpeakerphone } from 'react-icons/hi'
import { MdVolunteerActivism, MdOndemandVideo } from 'react-icons/md'
import { GiSelfLove, GiSwipeCard } from 'react-icons/gi'
import { FaStar, FaGratipay } from 'react-icons/fa'
import { SiFacebookgaming } from 'react-icons/si'
import { TbDeviceGamepad } from 'react-icons/tb'
import { BiWindowAlt } from 'react-icons/bi'

function Body() {
  return (
    <>
      <BodyContainer>
        <LeftBar>
          <div className='flex items-center'>
            <img className='w-6 h-6 object-cover  rounded-full border user-profile-image' src="/images/20220720_235525.jpg" alt="" />
            <span className='text-sm'>Gray Hornet</span>
          </div>
          <div className="">
            <PeopleRoundedIcon className='small' />
            <div>
              <span>Find Friends</span>
            </div>
          </div>
          <div className="">
            <FaFacebook />
            <span>Welcome</span>
          </div>
          <div className="">
            <HiUserGroup />
            <span>Groups</span>
          </div>
          <div className="">
            <AiTwotoneHome />
            <span>Marketplace</span>
          </div>
          <div className="">
            <BsCollectionPlayFill />
            <span>Watch</span>
          </div>
          <div className="">
            <FcClock />
            <span>Memories</span>
          </div>
          <div className="">
            <BsFillBookmarkFill />
            <span>Saved</span>
          </div>
          <div className="">
            <AiFillFlag className='yellow' />
            <span>Pages</span>
          </div>
          <div className="">
            <LocalActivityIcon className='small white' />
            <span>Events</span>
          </div>
          <div className="">
            <BsFillCreditCard2BackFill />
            <span>Most Recent</span>
          </div>
          <div className="">
            <HiSpeakerphone />
            <span>Ad Centre</span>
          </div>
          <div className="">
            <BsFillBarChartFill />
            <span>Ads Manager</span>
          </div>
          <div className="">
            <MdVolunteerActivism />
            <span>Community Help</span>
          </div>
          <div className="">
            <GiSelfLove />
            <span>COVID-19 Information Centre</span>
          </div>
          <div className="">
            <LocalFloristIcon className='small yellow' />
            <span>Emotional Health</span>
          </div>
          <div className="">
            <GiSwipeCard />
            <span>Facebook Pay</span>
          </div>
          <div className="">
            <FaStar className='yellow' />
            <span>Favourites</span>
          </div>
          <div className="">
            <FaGratipay className='yellow' />
            <span>Fundraisers</span>
          </div>
          <div className="">
            <SiFacebookgaming />
            <span>Gaming video</span>
          </div>
          <div className="">
            <MdOndemandVideo className='red' />
            <span>Live videos</span>
          </div>
          <div className="">
            <BsMessenger />
            <span>Messenger</span>
          </div>
          <div className="">
            <TbDeviceGamepad />
            <span>Play games</span>
          </div>
          <div className="">
            <BiWindowAlt />
            <span>Recent ad activity</span>
          </div>
        </LeftBar>
        <Posts>Bella</Posts>
        <RightBar>Blinder</RightBar>
      </BodyContainer>
    </>
  )
}

export default Body

const BodyContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: rgba(231, 231, 231, 0.39);
  padding: 1.5em;
`
const LeftBar = styled.div`
  position: relative;
  top: 0;
  overflow-y: scroll;
  flex: 3;

  div {
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;
    margin-bottom: 10px;    

    .user-profile-image {
      margin-right: -0.45em;
    }

    .yellow {
      color: rgba(230, 230, 10, 0.9);
    }

    svg {
      color: #4267B2;
    }

    .small {
      font-size: 1em;
    }
  }

  &::-webkit-scrollbar-thumb {
    width: 4px;
    height: 6px;
  }

  }


    `
const Posts = styled.div`
  flex: 6;
`
const RightBar = styled.div`
  flex: 3;
`