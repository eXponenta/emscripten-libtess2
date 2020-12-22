project (tess2)

cmake_minimum_required(VERSION 3.5.1)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11")
include_directories(include)

file(GLOB SOURCES src/*.c*)

set(CMAKE_RUNTIME_OUTPUT_DIRECTORY "${CMAKE_SOURCE_DIR}/build")
add_executable(tess2.single ${SOURCES})
add_executable(tess2.es ${SOURCES})
add_executable(tess2.split ${SOURCES})

add_executable(tess2.single.simd ${SOURCES})
add_executable(tess2.split.simd ${SOURCES})

message(STATUS "Setting compilation target to WASM")

set(LIKN_ARGS "-s WASM=1 --bind \
    -s MODULARIZE=1 \
    -s ENVIRONMENT='web' \
    -s EXPORT_NAME=createTess2Wasm \
    -s ALLOW_MEMORY_GROWTH=1 \
    -s USE_ES6_IMPORT_META=0 \ 
    --pre-js js/pre.js \
    -O3 -g0 \
    --closure 1" )

set_target_properties(tess2.es PROPERTIES LINK_FLAGS "${LIKN_ARGS} -s SINGLE_FILE=1 -s EXPORT_ES6=1")

set_target_properties(tess2.single PROPERTIES LINK_FLAGS "${LIKN_ARGS} -s SINGLE_FILE=1 ")

set_target_properties(tess2.split PROPERTIES LINK_FLAGS "${LIKN_ARGS} -s SINGLE_FILE=0 ")

set_target_properties(tess2.single.simd PROPERTIES LINK_FLAGS "${LIKN_ARGS} -s SINGLE_FILE=1 -msimd128")

set_target_properties(tess2.split.simd PROPERTIES LINK_FLAGS "${LIKN_ARGS} -s SINGLE_FILE=0 -msimd128")
