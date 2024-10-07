function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function newarray(){

document.getElementById("newbtn").removeEventListener("click",newarray);
const array=[]
document.getElementById("bar").innerHTML = "";



for(let i=0;i<50;i++){
    
    array.push(Math.floor(Math.random()*20)+1)
    const para = document.createElement("div")
    para.id=`bar${i+1}`;
    
    para.innerHTML = `${array[i]}`
    para.style.height=`${array[i]*20}px`
    para.style.width="20px"
    para.style.border="1px solid black"

    para.style.backgroundColor="red"
    document.getElementById("bar").appendChild(para)

   
    console.log(para.innerHTML)
}

// console.log("sid")
console.log(array)
document.getElementById("q").addEventListener("click",function(){quickSort(array)})

document.getElementById("b").addEventListener("click",function(){bubble(array)})

document.getElementById("m").addEventListener("click",function(){mergeSort(array)})

document.getElementById("s").addEventListener("click",function(){selectionSort(array)})
document.getElementById("i").addEventListener("click",function(){insertionSort(array)})



// await new Promise(resolve => setTimeout(resolve, 10000));
// await timeout(5000)


}

document.getElementById("newbtn").addEventListener("click",newarray);
// document.getElementById("b").addEventListener("click",bubble(array));


function swap(el1,el2)
{   
    // console.log(el1.innerHTML,el2.innerHTML)
    const style1 = el1.style.height;
    el1.style.height=el2.style.height;
    el2.style.height=style1
    const mat=el1.innerHTML
    el1.innerHTML=el2.innerHTML
    el2.innerHTML=mat  
}

async function bubble(array){
    
    document.getElementById("b").removeEventListener("click",function(){bubble(array)});

    for (var i = 0; i < 50; i++) {
       
        // Last i elements are already in place  
        for (var j = 0; j < (50- i - 1); j++) {
            
        var e1=document.getElementById(`bar${j+2}`)
        e1.style.backgroundColor="yellow"
            
        var e2=document.getElementById(`bar${j+1}`)
        e2.style.backgroundColor="yellow"
        await this.timeout(9)
            // Checking if the item at present iteration 
            // is greater than the next iteration
            // `bar${j+1}`.style.backgroundColor="blue"
            if (array[j] > array[j + 1]) {
                 

                swap(e1,e2)
                var temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
            e2.style.backgroundColor="red"
        }
         e1.style.backgroundColor="green"
    }
    document.getElementById("newbtn").addEventListener("click",newarray);
}

async function merge(arr,low,mid,high)
{
    temp=[]  
    pos=[]
    let left=low;
    let right=mid+1;

    while(left<=mid && right<=high)
    {
        if(arr[left]<=arr[right]){
            temp.push(arr[left++]);
            pos.push(left)
            
        }
        else{
            temp.push(arr[right++]);
            pos.push(right)
        }
       
        
    }
    
    while(left<=mid){
    temp.push(arr[left++]);
    pos.push(left)
    }
    while(right<=high){
    temp.push(arr[right++]);
    pos.push(right)
    }
    for(let x=low;x<=high;x++){
    arr[x]=temp[x-low];
    var e1=document.getElementById(`bar${x+1}`)
    e1.style.backgroundColor="yellow"
    e1.style.height=`${temp[x-low]*20}px`
    e1.innerHTML=`${temp[x-low]}`
    }
    await this.timeout(150)
    
}
async function divide(arr,low,high)
{   
    
    if(low==high)return;
    console.log(low,high)
    let mid=Math.floor((low+high)/2);
    await divide(arr,low,mid);
    await divide(arr,mid+1,high);
    await merge(arr,low,mid,high);
    for(let x=low;x<=high;x++){
        var e1=document.getElementById(`bar${x+1}`)
        e1.style.backgroundColor="green"}
}
async function mergeSort(arr) {
    document.getElementById("m").removeEventListener("click",function(){mergeSort(array)});
    
    await divide(arr,0,49);
    document.getElementById("newbtn").addEventListener("click",newarray);
   
    
}

async function selectionSort(arr)

{   
    const n=50
    document.getElementById("s").removeEventListener("click",function(){selectionSort(array)});
    let i, j, min_idx;

   
    for (i = 0; i < n-1; i++)
    {
       
        min_idx = i;
        for (j = i + 1; j < n; j++)
        if (arr[j] < arr[min_idx])
            min_idx = j;

        
        
        var e1=document.getElementById(`bar${min_idx+1}`)
        e1.style.backgroundColor="yellow"

            
        var e2=document.getElementById(`bar${i+1}`)
        e2.style.backgroundColor="green"
       
        
        await this.timeout(100)
        swap(e1,e2)
        let temp=arr[min_idx]
        arr[min_idx]=arr[i]
        arr[i]=temp
        console.log(arr)
         e1.style.backgroundColor="red"
         e2.style.backgroundColor="green"
        
    }
    
    document.getElementById("newbtn").addEventListener("click",newarray);
}

async function insertionSort(arr) {
    document.getElementById("i").removeEventListener("click",function(){insertionSort(array)});
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

       
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            var e1=document.getElementById(`bar${j+1}`)
            e1.style.backgroundColor="yellow"
            var e2=document.getElementById(`bar${j+2}`) 
           
            swap(e1,e2)
            await this.timeout(80)
           
            e1.style.backgroundColor="green"
           
           
            j = j - 1;
            
           
            
        }
    
        arr[j + 1] = key;
    }
    console.log(arr)
    
    document.getElementById("newbtn").addEventListener("click",newarray);
}

async function partition(arr, low, high) { 
    
    let pivot = arr[high]; 
    let i = low - 1; 
  
    for (let j = low; j <= high - 1; j++) { 
        // If current element is smaller than the pivot 
        if (arr[j] < pivot) { 
            // Increment index of smaller element 
                 
        
            i++; 
           
            
            // Swap elements 
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
            var e1=document.getElementById(`bar${j+1}`)
            e1.style.backgroundColor="yellow"
            
            var e2=document.getElementById(`bar${i+1}`)
            e2.style.backgroundColor="yellow"
            swap(e1,e2)
             
           
            e1.style.backgroundColor="red"
            e2.style.backgroundColor="red"
        } 
        await this.timeout(5) 
    } 
    // Swap pivot to its correct position 
   

    let t=arr[i+1]
    arr[i+1]=arr[high]
    arr[high]=t
    var q1=document.getElementById(`bar${high+1}`)     
    var q2=document.getElementById(`bar${i+2}`)
    q2.style.backgroundColor="green"
    swap(q1,q2)
    
   
    return i + 1; // Return the partition index 
} 
  
async function quick(arr, low, high) { 
   
    if (low >= high) return; 
    let pi = await partition(arr, low, high); 
    
  
    await quick(arr, low, pi - 1); 
    await quick(arr, pi + 1, high); 
} 
var f=0;
async function quickSort(arr) {

    console.log("sid")
    f++;
    if(f>1)
        
    

    await quick(arr,0,49);
    document.getElementById("q").removeEventListener("click",function(){quickSort(array)});
    
    
    



    console.log(arr)
    document.getElementById("newbtn").addEventListener("click",newarray);
    
    
}









