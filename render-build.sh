#!/usr/bin/env bash
# install FFmpeg system libraries for packages that need them
sudo apt-get update
sudo apt-get install -y ffmpeg libavcodec-dev libavformat-dev libavdevice-dev libavfilter-dev libavutil-dev libswscale-dev libswresample-dev pkg-config
