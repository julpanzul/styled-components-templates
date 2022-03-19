type Banner = {
    id: number
    title: string,
    desc: string,
    image: string,
    path: string
}
  
export const banner_list: Banner[] = [
    {
        id: 0,
        title: 'Banner 1',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ratione quia, omnis quae nam id molestiae eos dignissimos debitis pariatur!',
        image: '/images/banner_1.jpg',
        path: '/#'
    }, {
        id: 1,
        title: 'Banner 2',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ratione quia, omnis quae nam id molestiae eos dignissimos debitis pariatur!',
        image: '/images/banner_2.jpg',
        path: '/#'
    }, {
        id: 2,
        title: 'Banner 3',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ratione quia, omnis quae nam id molestiae eos dignissimos debitis pariatur!',
        image: '/images/banner_3.jpg',
        path: '/#'
    }
]
