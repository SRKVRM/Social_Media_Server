let db = {
  users: [
    {
      userId: "8i5P4Jq4swamT3rBwHEtOJQVMxD2",
      email: "new@gmail.com",
      handle: "New",
      createdAt: "2020-07-20T21:41:14.330Z",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/socialmediaapp-1c507.appspot.com/o/81281412001.jpeg?alt=media",
      bio: "Hi there",
      website: "http://google.com",
      location: "UK",
    },
  ],
  posts: [
    {
      userHandle: "user",
      body: "This is a new post",
      createdAt: "2020-07-20T21:41:14.330Z",
      likeCount: 5,
      commentCount: 4,
    },
  ],
  comments: [
    {
      userHandle: "user",
      postId: "32u3j89fhh9283h",
      body: "nice pic deer",
      createdAt: "2020-07-20T21:41:14.330Z",
    },
  ],
  notifications: [
    {
      recipient: "user",
      sender: "jonny",
      read: "true | false",
      postId: "45435253tmkfmfsvsik",
      type: "like | comment",
      createdAt: "2020-07-20T21:41:14.330Z",
    },
  ],
};

const userDetails = {
  //Redux data
  credentials: {
    userId: "8i5P4Jq4swamT3rBwHEtOJQVMxD2",
    email: "new@email.com",
    handle: "New",
    createdAt: "2020-07-20T21:41:14.330Z",
    imageUrl: "image/dfdsjjfjjs/sdjjfjsdfn",
    bio: "Hello I'm user.",
    website: "http://user.com",
    location: "India",
  },
  likes: [
    {
      userHandle: "user",
      postId: "dsfdskfkkffmj4i9238230",
    },
    {
      userHandle: "user",
      postId: "3847903809jjifdhv",
    },
  ],
};
