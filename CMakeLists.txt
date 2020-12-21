project (tess2)

cmake_minimum_required(VERSION 3.5.1)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11")
include_directories(include)

file(GLOB SOURCES src/*.c*)

set(CMAKE_RUNTIME_OUTPUT_DIRECTORY "${CMAKE_SOURCE_DIR}/build")
add_executable(tess2 ${SOURCES})

message(STATUS "Setting compilation target to WASM")
set(CMAKE_EXECUTABLE_SUFFIX ".js")
set_target_properties(tess2 PROPERTIES LINK_FLAGS "-s WASM=1 --bind -O3 -s MODULARIZE=1 -s EXPORT_NAME=createTess2Wasm -s SINGLE_FILE=1 --pre-js js/pre.js")
