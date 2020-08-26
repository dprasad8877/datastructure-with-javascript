function CreateStack(maxSize = 10) {
    const _stack = [];
    let _top = -1;

    function push(val) {
        if (_top >= maxSize - 1) {
            return "stack overflow";
        } else {
            _stack.push(val);
            _top++;
        }
    }
    function pop() {
        if (_top == -1) {
            return "stack underflow";
        } else {
            let last = _stack[_top];
            _stack.pop();
            _top--;
            return last;
        }
    }
    function size() {
        return _top + 1;
    }

    function peek() {
        if (_top > -1) {
            return _stack[_top];
        } else {
            return null;
        }
    }
    function search(val) {
        const temp=[];
        let found=null;
        while (_top>-1) {
            if(_stack[_top]===val)
            {
                found =_top;
                break;
            }
            temp.push(_stack.pop());
            _top--;
            const templen=temp.length;
            for (let i = 0; i < templen; i++) {
                _stack.push(temp.pop());
            }
        }
        return found;
    }
function empty(){
    while (_top>-1) {
        _stack.pop();
        _top--;
        
    }
}
    function print() {
        console.log(_stack.toString());
    }
    return {
        push,
        pop,
        size,
        peek,
        search,empty,
        print
    };
}
const stack = CreateStack();
stack.push(0);
stack.push(1);
stack.push(2);
console.log('size=>',stack.size());
console.log('size=>',stack.peek());
console.log('size=>',stack.search(1));

stack.pop();
stack.empty();
stack.print();


//push=> O(1);
//pop=> O(1);
//size=> O(1);
//peek=> O(1);
//search=> O(n);
//empty=> O(n);
