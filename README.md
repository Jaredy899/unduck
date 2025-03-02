# Jared's Bang Search

A faster alternative to DuckDuckGo's bang redirects. This project allows you to use DuckDuckGo's bang syntax for quick searches without the slowness of DuckDuckGo's redirects.

## How to Use

1. Add `https://jared-c.com?q=%s` as a custom search engine in your browser
2. Set it as your default search engine
3. Use bang syntax like `!g search term` for Google, `!yt search term` for YouTube, etc.
4. Set a default bang for when no bang is specified

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deploying to Vercel

1. Fork this repository to your GitHub account
2. Sign up for [Vercel](https://vercel.com) if you haven't already
3. Create a new project in Vercel and import your GitHub repository
4. Configure your custom domain (jared-c.com) in the Vercel project settings
5. Deploy!

## Credits

This project is a fork of [unduck](https://github.com/t3dotgg/unduck) by Theo.

```
https://unduck.link?q=%s
```

## How is it that much faster?

DuckDuckGo does their redirects server side. Their DNS is...not always great. Result is that it often takes ages.

I solved this by doing all of the work client side. Once you've went to https://unduck.link once, the JS is all cache'd and will never need to be downloaded again. Your device does the redirects, not me.
