project (tess2)

cmake_minimum_required(VERSION 3.5.1)
option(JS_ONLY "Compiles to native JS (No WASM)" OFF)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11")
include_directories(include)

file(GLOB SOURCES src/*.c*)

set(CMAKE_RUNTIME_OUTPUT_DIRECTORY "${CMAKE_SOURCE_DIR}/public")
add_executable(tess2 ${SOURCES})

if(JS_ONLY)
	message(STATUS "Setting compilation target to native JavaScript")
	set(CMAKE_EXECUTABLE_SUFFIX ".asm.js")
	set_target_properties(tess2 PROPERTIES LINK_FLAGS "-s WASM=0 -s")
else(JS_ONLY)
	message(STATUS "Setting compilation target to WASM")
	set(CMAKE_EXECUTABLE_SUFFIX ".js")
	set_target_properties(tess2 PROPERTIES LINK_FLAGS "-s WASM=1 -s")
endif(JS_ONLY)

set_target_properties(tess2 PROPERTIES LINK_FLAGS "--bind")