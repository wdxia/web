<template>
  <div class="wrapper">
    <div class="marquee-wrap"><vue-marquee content="33333" class="two" :showtwo="false"></vue-marquee></div>
    <p>落霞与孤鹜齐飞，秋水共长天一色。</p>
    <img src="@/assets/b.jpg" alt="">
    <img src="../../assets/color.png" alt="">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAA+CAYAAAA4aXupAAAAAXNSR0IArs4c6QAACLJJREFUWAm1WH1sHEcVfzszu3sftu/cc1DaqKV1i5IqCjRQCFUhGCGlKCg0ITiJ+Ehj0jj+UCCOU9GoqrQCKeWPQNUWRaQCVUkbUaWtVPoPKn/QFAISCKEQGiQqikRpmo/GH+c7391+zfLe3u16727PvnPDyOednXnzfvPezPtagGW0vc8e+v5XnzFuWcZSYJ0ueuzVoVuFyh5XHL6t07VE3zGgVRRDekKkFfD2DRhGolPQjgAPPrcnCwobcioWMME/kc3Al/+vgFwkv85VcbuUEkBRCGscDKOjTbdNbJwZ1DyQo570fKGk4wDjfGBbhm3oRMq2AefKuU2c80+6jlvlj7ioVgGKHLvxgB4owLxxxnw1hvyl7aBm2dbtT/3wY+HgEp22JJw8PXYvY+xLTiBdjannecBU0eWB9/ASOOF0W4CelGNCcBWqxxcupo7ETSDw7sGnj66om2jxsiTgxOnRfoUpX3Ps2tk1MMLNANfUla5rfbNhKvZ1SUAmvb2qxntIfa2a50rwFGV4ywkj1YomGF8U8MjJ8RwSPuS2kC5gIl0Xb6y4Wy0rW4KxVs9FAS3F3a2ntFWyZnutmNA4qp0eE8MnTqjUadUWBeQc/mBV7DehZg5V51LPSqFB/KuUy9PS835WP9v8Vm9YzfMw+fz+Nx1P2VicN0FTOaR0DiU7BZfzveBKGyqW6f9s1ymVSpUNF4794q0YNuGQCHsxnclTIw8wwT6v4qXoSqowUzQhX6yARKlmCgCWbYH08JYy3Egqncqkug5dAPhODKtwaFGVohsh76LQBVU5g49kktCT0mC+bIKNvjSpJ+Cmniz0ZXOQTXVBKpnevv1Joz/kHtNpCXjo5Mh6hcOmwP7IKOjXndZgZa4bQfog251B0CRKyICcOkaSHsmUZUqowCh6F73Ru5A9EgAKTh7G/wWCkNdB+j3bjh4hc4ptsRJOnh7/KN6+QceK9y6xnHCw5nVWQTKxqxVNLKAi3SFV59nFvEsrhuR1sO3f81x8+tEEOHp6tBeXDLmOv7AV35bjvtdR+br8LGyOI2oCTEkYVDVxm6zuNG5NG2O+eY8bMelHHeCBpw/oGHAwjViedMFOKP1QON94IcPuC8aCZx2g2us8wAW/Z7nqDJjSE/MdIWPSjxBw+MSwqnjyEQSMrlt23z9Lxnc++MwP1kWZhIDp3rTAtPisYzn/ZOhVMKWI0rXdJ2eODgBtxJtGT/WysKHufJqc99iZsa6U633Bc7wfY1BdjT7EBwviLzo6KJpJuDJ3E/KrzhEBAZEZORj6uRCPq6C9+NL3Hn23cadNYhzfcbzIuXsO16ZMy4Hpgglls+oA/FAU4UDv9HOlC8XyPEzlZ2CqMCveu3Lp33FgtLQJkAadCntYS4hbkxqFI+FHifen5iGPIcpxKWesSlM2KzAzNwvXZ6cxihT86IFuj2W7ug/TnSBeja0pPB0+dTjtKcV9dFNJjQkEXdmb9EGn5ioIihLhxPWCCy5ef/SmKCUDXVV9R57QdRCq+plr811fRLDfLAnowvyDGGhXh1ECQUltuZ4EgqO0hQoUyhY4juo7cV3VIJVIYnDWwnNEetrDeBxg3aUxjAExd+eas0Ll98clToiLKpVwaRpgupSFdCIBQlSVVOd3q2droml89tUJ43xUyrozLPav2cg5uy8OjBaRigVXoC+Tgp50N2Ct4d/MOrAaIdYdOso5EgWjfh0gnsc42mDdWOMCeifgJpAGQqo7UMc7Bp8ybotOhcwnXhhepzC2uZV00UXt9GlD6AB6bVCGovQhIJPKfqHxxFI7jy5eqk8ZgCJhaOuTRjag9QEnTo6swmu1K7iZweSHfdYyAD97CHj5gJiZPSR0nguq22DyRjwJFI98dPCMoRE/duCFAz14BfbeiJAUt0GKGnib1zvv800+oAbWt/Sk1v/hInwc1MIYxkZ8kY98Ct0dA5fNY2V7Hm0GMLUIipIF6uX2kB9WVH6ocm3nMr5e7Hdu0X1PQ6mFnrXvB8F2oYF9BZW+Ep8Mdd/UWoWnKCFtHv17Eb3sH9HN/9KRlV+/dvDoVaLxAaPEB58fvlnx2BsItppyfI6ehU49AG8FSCBkUhgPwcSEFs1h5+tHfvRKlDf1m6IFA3EHF94dti2hZDpAtSFFDKqcaOPR5kuCAxQPTdOCCoYrKnA8rG7Q03wOp5oAQ8MPGXnud/GQNY41YTdWTDqCzZUsuDpTgkIJ8wXcQABkWhbkC3N+PJwpzEIZSzfalY7fHzLdmW8P/uSxVSHfWqdOwoOnxu5mzNsSuDdSI0mnq0lf2lks12aL0k9Srs9JDFG2z4aceDqR8kOUhnGRyjehazm3Yu1GgidqWP6jTkKGaR26t1TUveGx+C2dEHBzLg3ZLh1MuwrUlUpDLtMLK6hcw0qK4iKBUaPgjBXPvm8cf6LXH6j9CyX0Iz0U7yUAgeZBUjYC0xH2YLnmMR2UQg6ZV7kQXZQWQxOaF6Vfbq5iW/cg1Rs1vIXwdGz3sZLKlM2OI7fj97RX8P7mVcxnGvNUYkylGoFHgQgAv9fQ+eLHRu/Pnu1MAnfX83Nv/S4Ao2fDvVuYog9CaBFbkWQH1tWfRlWzavkmF9JEtFQybt9sXPdd5PYa/l6cnpJ/OmsYqNPm1hIwIKW0Y/6uNRs8jCZgu0OKpqQLVhKuFvqwyDdJyt9yTfycOd7rLx0yMPlYvC0JGF0+ObLzb7xP+/hMUod33p4D8z+XoHztg41//cfbv4/SLdYPL81iRDRnDAyIgoVZ+1ULzOvXIP+v//oJlEgkYvPPVvzqzKIVUThO+kCHQF+dFCp68Ikq7YhH28QXV6wgi/E6OoNwpwudtgEXllBv+bDLBFyAx1KiIx5tE69du5ZUqgWOmyDpGzh+0Gubh79mYa+L9wzDoCP8KV6SKyoWnORrXClfdjyOn9fabx0fxqMju26//EF+/OI77537y/m//6p9qCrl/wAJrWuw96E/XQAAAABJRU5ErkJggg==" alt="">
  </div>
</template>

<script>
import VueMarquee from 'vue-marquee-ho';
import Css from 'vue-marquee-ho/dist/vue-marquee.min.css'
export default {
  name: 'Index',
  components: {
    "vue-marquee": VueMarquee
  }
}
</script>

<style>
.marquee-wrap {
  width: 100px;
  font-size: 18px;
}
.wrapper {
  height: 750px;
  border: 1px solid red;
}
p {
  font-size: 200px;
  height: 150px;
  color: red;
}
img {
  width: 100px;
  height: 100px;
}
</style>