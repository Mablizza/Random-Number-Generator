let winGifs = [
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjh3aTRkZXB4dGJmYWpqZDd0bDRpNWk4ZWZrMzE1cHFpaTJ5eWM1cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mFT4P0B17dZvylMet4/giphy.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjRnbmJlNmd4ZTQ0eXZ3YWE2dTdjNTM5eHg5a284c2pnNndvYXNpYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hoI2mDkwTFkvZ2Oqqm/giphy.webp",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGI1OGxhenJhM2N5Z2QxNnJpMnM2ZnppYmk4NHp1ejlmeHFjZnRuMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/artj92V8o75VPL7AeQ/giphy.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWRiYW9zOWx6MXNxZTkxYjVrMHpkZWZqZmlhbGYycmhyc293NzAwZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4JySAWfMaY7w88sU/giphy.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExczd2dTNpbTJwcndmbzd6b2YxYWkyaGs3dThyb3FhbDAxaHFyMWtpMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gb5Ew2edUemA2w1I7Q/giphy.webp",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM203dDlub2hwNzZkYTNwbjFxbmdwbnc2Z2psNTZvMThxcnVvZzBociZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LNE01Z89j9gis/giphy.webp",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMm84ZGtrcHd0eW5kdHhnZ244YTA4d3Q0ZWp4dnA2N3Uycmk0dmt2ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MhHXeM4SpKrpC/giphy.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGp6bGQ4bXN0M3lkYnJkbTh2OG1pbHlnZm95d2N0M2ZodWNqcDZxcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/t3sZxY5zS5B0z5zMIz/giphy.webp",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTVqazVlNDcxNHhrODVjbGttMmQwb2tzZjI1amx4emNvdXRvbW40cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iz2Hqrmrn0NG0/giphy.webp",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzc4Yjk5NjFoZjIwMW5zejR4YXlvbnoxYmMwb2phbjQ0aDQyd2QyMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DffShiJ47fPqM/200.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExajV2eGdla244ZjY3dGtodmFucXYzNWtxOW1wYnNwNmVuaWsyZzh6cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ornjXIIShZ2MgyyHu/giphy.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzU0aWF6YmY4ZzZ0Zm9jb2RtMDBqYWpvcG4yNno1amxkMjZzNTZzbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/D2hncA3u88gmeCFeoh/giphy.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYm4xb3k0bnN5cDI1OTl5eGZld24wcHRnZTVlajFwNG1oYWV3MDdkZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XBFGbNAAsAWaFA75Bu/giphy.webp",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDR3OGI2M3F0Z2QxaWk3eXRrZjZscmRyNno2aGxiY2psYmxmYnZxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QBC5foQmcOkdq/giphy.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTJ1d2x1amVhaXp2dnlsZ2lhcnVjOThuaTRweTdhMjZqbml5OTBjNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DKqH1q9gN5AKA/giphy.webp",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTdqd3V3a3k3N2JsOWZ5cDl0ajN1M3Axb2VjYjh0bWE5bmp6azhqNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/90nQKyQVBejOBZWT4O/giphy.webp",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXU1b3ltajdpc2xmNDVxZzdkNHllbDN2cDlnOHdsanB0aTR1MTQwbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5K7ngCtszoxxbaBieC/giphy.webp",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3c0MW1iZGV3ZDRsYjY2ZjUxZGkxM3FiendqODV3cTFnNTYwNjJ0ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUOrwp4STllIPP6zyo/giphy.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2QyNnZ2ZjJkcHgwYjF5ZDQxOWdhdWpjOXZtd2NwdXQ2dWo2c3pwMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LZElUsjl1Bu6c/giphy.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXhoZDdvbzFmMWV1bWtscWI2Z2V5NnJzemZpeDBnemM0ampwNnUyaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZUomWFktUWpFu/giphy.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDVydXBtcmVweGd4dmZ2aWg4am0xNGs4ODdvZ2dsNHN1cm00ZjAyZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2A75RyXVzzSI2bx4Gj/giphy.webp",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjVlb3hyMGozYXh1aTBjYjV3c2h0aHJubzJoOWFtM3JlOXc3dHM2cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RLDl4nXpaKNGtsMRH6/giphy.webp",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHg3eXR3MWdqbHBtcXRneXQ0OWJobDh6ZDRhZDZteDI1NW54ZjkyNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JE6xHkcUPtYs0/giphy.webp",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmNic3Vtczk3djkxaWE2NGZhYW5qcHU0Zjh2NDZsMGV3NGxlNzJ4MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CKOCV8dKimlmmS41kE/giphy.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmh6cXo1b202dDY5Mzc2OW9vdzI1d2d2ZDFjanhvNHpqNzIxanVxbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/G1W0LQ2SU6PWiA3Qee/giphy.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTl0M3Qyajh0aXgwb3d1dm5qenphOHB3Z2FoMGhseW9zZ3Fmc2F0ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11sBLVxNs7v6WA/giphy.webp",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXMyc3ZiNHVrdXM4bzljcXdia2F4YjlveDJubGpmOWtqcnhnNnhraSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ybS2TjdSB8BP1nQ73m/giphy.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2ZkNGlpajRmeGg0Z2l0czBtMm13Mmx6MXQzd3o1OGMwMHByY2dieiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2yqyFewNoB7Ec0ePIQ/giphy.webp"
]

let loseGifs = [
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGd6d3RvOGdoa2F4OWpqNmd4djJpeGNxNDF4MzB1bXE3Z3d1cW4zbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OPU6wzx8JrHna/giphy.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbm40Z3N4cnV1Yjdsc2ZyMTZ5bHV2MXRhY3kydmozbmM0YnF0dTFzMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9Y5BbDSkSTiY8/giphy.webp",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzFqM3RoYnF0bjZkaWxhMzRnaWZqMmF1ZHV4cW4zankxNTBqenNoMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l1AsyjZ8XLd1V7pUk/giphy.webp",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3dzY2JqdTdjM2hvbGNnZWJsY2o5YWc3MGoyb2NuNXA2MzZ6OWo5bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7SF5scGB2AFrgsXP63/giphy.webp",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExamRhaTMzaTl3cG5nanZ3dWYwaGhmcmE2bWJ6djU2YWFieXd5dnRhNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ty9Sg8oHghPWg/giphy.webp",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmtlcG1pZzdsejUyMXk4aWY2bWsyeGwzNmluNnN3MDBjaTM3dzhkeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d2lcHJTG5Tscg/giphy.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMG9wMzAxOHN5anptdW8zOGp6ZDZldTdvNzhvMHNtemI4bnRwbG02YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/10tIjpzIu8fe0/giphy.webp",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXFsODFtcDZkbnliMnVsMDg4a2pvYWppcXF4NmJkYXRiaWhtZHI5eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6qFFgNgextP9u/200.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3RneXExa2xxbmozZWhsMW1xY3dpd3AxM3YxMmc0bWMxc3h6ZzU5bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ChX3hzy5CkXsI/giphy.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOThtbW9kcG1xNWc3ZGJoeXltNHZ2Y3hydWdtcmY4Y3JpZWRhZ2IwdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bgDIgfQsgcXLi/giphy.webp",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXowNm9oYnEyNzZ3YzI2dWtlazJ4NWtnejhpNzNyM2Z6OWluN2RjaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Txh1UzI7d0aqs/200w.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHRobHN0MGticDRreDVjcDhsOHFuYjhlOWp1aXV6aTZyemxsYWhsciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Q8FaD6GjQ97jO/giphy.webp"
]

export { winGifs, loseGifs }