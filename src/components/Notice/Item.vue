<template>
  <div class="item flex items-center">
    <div class="image image-cover">
      <img src="~/assets/images/avatar.gif">
    </div>
    <div class="inbox">
      <div class="message">Tim Buchalka's Learn Programming Academy 發佈了一則公告：Thank you for being a part of this course in Udemy. I hope you’re finding it valuable and learning a lot.Today, I would like to share with you two things: What programming language you should learn to start generating an income as quickly as possible and the four stages of becoming a programmer (and why you need to know them).1. What Programming Language should you Learn to Earn As Quickly As Possible?With the wide selection of programming languages to learn out there, which one should you learn first to help generate an income as quickly as possible?Does the choice of programming language really have an impact here? Are there languages you should not learn first?Let’s find out in this video:Watch Tim’s What Programming Language to Learn to Earn As Quickly As Possible Video2. Four Stages of Becoming a ProgrammerDid you know that there are four distinct stages every programmer goes through when learning how to program?Knowing which stage you are at can dramatically reduce frustration. What stage are you at in your journey?What are the things you can learn from each stage?How do you know you’ve already moved on from one stage to the next?Find out the answers in this video:Watch Tim’s Four Stages of Becoming a Programmer VideoDo you need to catch up on previous weeks’ videos? Here are the links so you can watch them:8 Interview Tips for Software Developers VideoCan Shortcuts Increase Your Learning Time As A Programmer VideoChoosing a Career Path VideoDo I Need To Be Good At Math VideoDo Programmers Need a Computer Science Degree VideoFour Ways to Improve Your Programming Logic Skills VideoGet Better at Solving Problems VideoGoal Setting and Planning VideoHow Fast Can You Learn Programming VideoHow to Get Your First Programming Interview VideoHow to Make Your Résumé Stand Out From the Crowd VideoHow to Pick an Instructor For Your Online Programming Course VideoIs It Possible to Learn Multiple Programming Languages at the Same Time VideoProgrammer’s Most Important Skill VideoSelf-Taught Software Developers VideoThe Right Way to Ask a Technical Question VideoUsing Books To Supplement Programming Video Course Training VideoWhat Computer Specs Do You Need for Programming VideoWhy Is It Important To Verify Opinions Before Accepting Them VideoWhy Programmers Need to Use Search Engines VideoThat’s all I have for you today. I’ll be back again next week for more videos.Regards,Tim Buchalka</div>
      <div class="date">20 天前</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid $lighter2;
  &:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: 0;
  }
  .image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 12px;
  }
  .inbox {
    flex: 1;
  }
  .message {
    display: -webkit-box!important;
    height: 45px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-line-clamp: 2;
    -moz-line-clamp: 2;
    -ms-line-clamp: 2;
    -o-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -ms-box-orient: vertical;
    -o-box-orient: vertical;
    box-orient: vertical;
  }
  .date {
    color: $light;
    font-size: 13px;
  }
}
</style>
