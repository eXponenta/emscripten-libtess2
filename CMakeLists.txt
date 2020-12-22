project (tess2)

cmake_minimum_required(VERSION 3.5.1)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11")
include_directories(include)

file(GLOB SOURCES src/*.c*)

set(CMAKE_RUNTIME_OUTPUT_DIRECTORY "${CMAKE_SOURCE_DIR}/build")
add_executable(tess2.single ${SOURCES})
add_executable(tess2.split ${SOURCES})

message(STATUS "Setting compilation target to WASM")

set_target_properties(tess2.single PROPERTIES CMAKE_EXECUTABLE_SUFFIX ".single.js")

set_target_properties(tess2.single PROPERTIES LINK_FLAGS "-s WASM=1 --bind \
    -s MODULARIZE=1 \
    -s EXPORT_NAME=createTess2Wasm \
    -s SINGLE_FILE=1 \
    --pre-js js/pre.js \
    -O3 -g0")

set_target_properties(tess2.split PROPERTIES  CMAKE_EXECUTABLE_SUFFIX ".js")

set_target_properties(tess2.split PROPERTIES LINK_FLAGS "-s WASM=1 --bind \
    -s MODULARIZE=1 \
    -s EXPORT_NAME=createTess2Wasm \
    -s SINGLE_FILE=0 \
    --pre-js js/pre.js \
    -O3 -g0")
